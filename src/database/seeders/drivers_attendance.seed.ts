
import { DataSource } from 'typeorm';
import dataDriversAttendance from './data/data_drivers_attendance';
import { DriverAttendances } from '@/modules/driver_attendances/driver_attendances.entity';

export class DriverAttendanceSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const driverAttendanceRepository = dataSource.getRepository(DriverAttendances);

    for (const item of dataDriversAttendance) {
      await driverAttendanceRepository.insert({
        id: parseInt(item.id),
        driver_code: item.driver_code,
        attendance_date: new Date(item.attendance_date),
        attendance_status: item.attendance_status,
      });
    }

    console.log('Driver Attendance seeded successfully');
  }
}
