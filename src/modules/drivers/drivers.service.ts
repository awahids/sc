import { Injectable } from "@nestjs/common";
import { Drivers } from "./drivers.entity";
import { In, Not, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { DriverSalaryQueryDto } from "./drivers.dto";
import { VariableConfigs } from "../variable_configs/variable_configs.entity";

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Drivers)
    private driverRepo: Repository<Drivers>,

    @InjectRepository(VariableConfigs)
    private variableConfigRepo: Repository<VariableConfigs>
  ) { }

  async queryBuildersallaryDrivers(dto: DriverSalaryQueryDto) {
    const { page_size = 10, current = 1, month, year, driver_code, name, status } = dto;

    const currentPage = Number(current);
    const pageSize = Number(page_size);

    if (isNaN(currentPage) || isNaN(pageSize) || currentPage < 1 || pageSize < 1) {
      throw new Error('current and page_size must be positive numbers');
    }

    if (!year || !month) {
      throw new Error('year and month is required');
    }

    const variableConfig = await this.variableConfigRepo.createQueryBuilder('variableConfig')
      .where('variableConfig.key = :key', { key: 'DRIVER_MONTHLY_ATTENDANCE_SALARY' })
      .getOne()

    const queryBuilder = this.driverRepo.createQueryBuilder('driver')
      .select([
        'driver.driver_code',
        'driver.name',
        'SUM(CASE WHEN shipmentCosts.cost_status = :pending THEN shipmentCosts.total_costs ELSE 0 END) AS total_pending',
        'SUM(CASE WHEN shipmentCosts.cost_status = :confirmed THEN shipmentCosts.total_costs ELSE 0 END) AS total_confirmed',
        'SUM(CASE WHEN shipmentCosts.cost_status = :paid THEN shipmentCosts.total_costs ELSE 0 END) AS total_paid',
        'COUNT(attendances.attendance_date) * :salary AS total_attendance_salary',
        'COUNT(shipmentCosts.id) AS count_shipment',
        'SUM(CASE WHEN shipmentCosts.cost_status IN (:...statuses) THEN shipmentCosts.total_costs ELSE 0 END) + COUNT(attendances.attendance_date) * :salary AS total_salary'
      ])
      .leftJoin('driver.shipmentCosts', 'shipmentCosts')
      .leftJoin('driver.attendances', 'attendances')
      .leftJoin('shipmentCosts.shipment', 'shipment')
      .where('attendances.attendance_status = :status', { status: true })
      .groupBy('driver.driver_code, driver.name')
      .setParameters({
        pending: 'PENDING',
        confirmed: 'CONFIRMED',
        paid: 'PAID',
        statuses: ['PENDING', 'CONFIRMED', 'PAID'],
        salary: variableConfig.value,
        current: current,
        page_size: page_size
      })
      .orderBy('driver.driver_code', 'DESC')
      .offset(currentPage)
      .limit(pageSize);

    if (month && year) {
      queryBuilder.andWhere('EXTRACT(YEAR FROM shipment.shipment_date) = :year', { year });
      queryBuilder.andWhere('EXTRACT(MONTH FROM shipment.shipment_date) = :month', { month });
    }

    if (driver_code && driver_code.trim()) {
      queryBuilder.andWhere('driver.driver_code = :driver_code', { driver_code: driver_code.trim() });
    }

    if (name && name.trim()) {
      queryBuilder.andWhere('driver.name LIKE :name', { name: `%${name}%` });
    }

    if (status && status.trim()) {
      queryBuilder.andWhere('shipmentCosts.cost_status = :status', { status: status.trim() });
    }

    const totalRow = await queryBuilder.getCount();
    const data = await queryBuilder.getRawMany();

    return {
      data: data.map((item) => {
        return {
          ...item,
          total_pending: parseInt(item.total_pending),
          total_confirmed: parseInt(item.total_confirmed),
          total_paid: parseInt(item.total_paid),
          total_attendance_salary: parseInt(item.total_attendance_salary),
          count_shipment: parseInt(item.count_shipment),
          total_salary: parseInt(item.total_salary)
        }
      }),
      total_row: totalRow,
      current: currentPage,
      page_size: pageSize
    };
  }
}

