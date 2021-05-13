import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('lokasi_event')
export class LksEvn {
  @PrimaryGeneratedColumn()
  id_lokasi_event: number;

  @Column()
  nama_gereja: string;

  @Column()
  alamat: string;

  @Column()
  id_gereja: number;
}