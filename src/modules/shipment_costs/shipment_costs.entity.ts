import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique, JoinColumn } from 'typeorm';
import { Shipments } from '../shipments/shipments.entity';
import { Drivers } from '../drivers/drivers.entity';

@Entity({ name: 'shipment_costs' })
@Unique(['driver_code', 'shipment_no'])
export class ShipmentCosts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  driver_code: string;

  @Column({ type: 'varchar', length: 255 })
  shipment_no: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_costs: number;

  @Column({ type: 'varchar', length: 255 })
  cost_status: 'PENDING' | 'CONFIRMED' | 'PAID';

  @ManyToOne(() => Drivers, (driver) => driver.shipmentCosts)
  @JoinColumn({ name: 'driver_code', referencedColumnName: 'driver_code' })
  driver: Drivers;

  @ManyToOne(() => Shipments, (shipment) => shipment.shipmentCosts)
  @JoinColumn({ name: 'shipment_no', referencedColumnName: 'shipment_no' })
  shipment: Shipments;
}
