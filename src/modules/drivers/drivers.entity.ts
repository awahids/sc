
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DriverAttendances } from '../driver_attendances/driver_attendances.entity';
import { ShipmentCosts } from '../shipment_costs/shipment_costs.entity';

@Entity({ name: 'drivers' })
export class Drivers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  driver_code: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => DriverAttendances, (attendance) => attendance.driver)
  attendances: DriverAttendances[];

  @OneToMany(() => ShipmentCosts, (shipmentCost) => shipmentCost.driver)
  shipmentCosts: ShipmentCosts[];
}
