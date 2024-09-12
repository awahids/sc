import typeormConfig from "../../config/typeorm_cli.config";
import { DriverSeeder } from "./drivers.seed";
import { ShipmentCostsSeeder } from "./shipment_costs.seed";
import { VariableConfigSeeder } from "./variable_configs.seed";
import { ShipmentsSeeder } from "./shipments.seed";
import { DriverAttendanceSeeder } from "./drivers_attendance.seed";

async function runSeeders() {
  try {
    await typeormConfig.initialize();

    const variableConfigSeeder = new VariableConfigSeeder();
    await variableConfigSeeder.run(typeormConfig);

    const driversSeeder = new DriverSeeder();
    await driversSeeder.run(typeormConfig);

    const shipmentsSeeder = new ShipmentsSeeder();
    await shipmentsSeeder.run(typeormConfig);

    const driverAttendancesSeeder = new DriverAttendanceSeeder();
    await driverAttendancesSeeder.run(typeormConfig);

    const shipmentCostsSeeder = new ShipmentCostsSeeder();
    await shipmentCostsSeeder.run(typeormConfig);

    console.log('Seeders executed successfully');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    await typeormConfig.destroy();
  }
}

runSeeders();
