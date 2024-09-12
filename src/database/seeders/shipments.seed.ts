
import { DataSource } from 'typeorm';
import { Shipments } from '@/modules/shipments/shipments.entity';
import dataShipments from './data/data_shipments';

export class ShipmentsSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const shipmentRepository = dataSource.getRepository(Shipments);

    for (const item of dataShipments) {
      await shipmentRepository.insert({
        shipment_no: item.shipment_no,
        shipment_date: new Date(item.shipment_date),
        shipment_status: item.shipment_status,
      });
    }

    console.log('Shipments seeded successfully');
  }
}
