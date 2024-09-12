
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique, JoinColumn } from 'typeorm';
import { Drivers } from '../drivers/drivers.entity';

@Entity({ name: 'driver_attendances' })
@Unique(['driver_code', 'attendance_date'])
export class DriverAttendances {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  driver_code: string;

  @Column({ type: 'date' })
  attendance_date: Date;

  @Column({ type: 'boolean' })
  attendance_status: boolean;

  @ManyToOne(() => Drivers, (driver) => driver.attendances)
  @JoinColumn({ name: 'driver_code', referencedColumnName: 'driver_code' })
  driver: Drivers;
}
