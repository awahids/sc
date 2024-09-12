import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drivers } from './drivers.entity';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { VariableConfigs } from '../variable_configs/variable_configs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Drivers, VariableConfigs]),
  ],
  controllers: [DriversController],
  providers: [DriversService],
  exports: [DriversService]
})
export class DriversModule { }
