
import { Drivers } from '@/modules/drivers/drivers.entity';
import { DataSource } from 'typeorm';
import dataDrivers from './data/data_drivers';

export class DriverSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const driverRepository = dataSource.getRepository(Drivers);

    for (const driver of dataDrivers) {
      await driverRepository.insert(driver);
    }

    console.log('Drivers seeded successfully');
  }
}
