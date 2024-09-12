import { VariableConfigs } from '../../modules/variable_configs/variable_configs.entity';
import { DataSource } from 'typeorm';

export class VariableConfigSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const variableConfigRepository = dataSource.getRepository(VariableConfigs);

    await variableConfigRepository.insert({
      key: 'DRIVER_MONTHLY_ATTENDANCE_SALARY',
      value: 50000,
    });

    console.log('Variable config seeded successfully')
  }
}
