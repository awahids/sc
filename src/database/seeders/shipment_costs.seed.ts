
import { DataSource } from 'typeorm';
import { ShipmentCosts } from '@/modules/shipment_costs/shipment_costs.entity';
import dataShipmentCosts from './data/data_shipment_costs';

export class ShipmentCostsSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const shipmentCostsRepository = dataSource.getRepository(ShipmentCosts);

    for (const item of dataShipmentCosts) {
      await shipmentCostsRepository.insert({
        id: parseInt(item.id),
        driver_code: item.driver_code,
        shipment_no: item.shipment_no,
        total_costs: parseInt(item.total_costs),
        cost_status: item.cost_status
      });
    }

    console.log('Shipment Costs seeded successfully');
  }
}
