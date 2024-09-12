import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'variable_configs' })
export class VariableConfigs {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  key: string;

  @Column({ type: 'int' })
  value: number;
}
