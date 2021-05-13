import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('tipe_pelaksanaan_event')
export class TpEvent {
  @PrimaryGeneratedColumn()
  id_tipe_pelaksanaan_event: number;

  @Column()
  nama_tipe_pelaksanaan: string;
}