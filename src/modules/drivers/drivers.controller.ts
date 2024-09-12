import { Controller, Get, Query } from "@nestjs/common";
import { DriversService } from "./drivers.service";
import { errorResponse } from "@/utils/helper";
import { DriverSalaryQueryDto } from "./drivers.dto";

@Controller({ version: '1', path: 'sallary' })
export class DriversController {
  constructor(
    private readonly driverService: DriversService,
  ) { }

  @Get('/driver/list')
  async sallaryDrivers(@Query() dto: DriverSalaryQueryDto) {
    try {
      const data = await this.driverService.queryBuildersallaryDrivers(dto);
      return data
    } catch (error) {
      console.log(error)
      return errorResponse(error.message, error.status)
    }
  }
}