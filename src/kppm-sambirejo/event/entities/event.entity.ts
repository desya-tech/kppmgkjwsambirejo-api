import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { KatEvn } from './kategori_event.entity';
@Entity('event')
export class Eventls {
  @PrimaryGeneratedColumn()
  id_event: number;

  @Column()
  nama_event: string;

  @Column()
  start_event: Date;

  @Column()
  end_event: Date;

  @Column()
  tema_event: string;

  @Column()
  ayat: string;

  @Column()
  id_kategori_event: number;

  @Column()
  deskripsi_event: string;

  @Column()
  deskripsi_ayat: string;

  @Column()
  id_pelayan: number;

  @Column()
  id_tipe_pelaksanaan_event: number;

  @Column()
  id_status: number;
  
  @Column()
  show_type_id: number;

  // @ManyToOne(type => KatEvn, fillKatEvent => fillKatEvent.Event, { cascade: ["insert", "update"], onDelete: 'CASCADE', eager: true })
  // KatEvent: KatEvn[];
}