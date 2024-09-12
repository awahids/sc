import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { ShipmentCosts } from '../shipment_costs/shipment_costs.entity';

@Entity({ name: 'shipments' })
export class Shipments {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  shipment_no: string;

  @Column({ type: 'date' })
  shipment_date: Date;

  @Column({ type: 'varchar', length: 255 })
  shipment_status: 'RUNNING' | 'DONE' | 'CANCELLED';

  @OneToMany(() => ShipmentCosts, (shipmentCost) => shipmentCost.shipment)
  shipmentCosts: ShipmentCosts[];
}
