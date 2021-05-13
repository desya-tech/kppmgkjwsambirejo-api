import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Eventls } from './event.entity';
@Entity('kategori_event')
export class KatEvn {
  @PrimaryGeneratedColumn()
  id_kategori_event: number;

  @Column()
  nama_kategori: string;

//   @OneToMany(type => Eventls, fillEvent => fillEvent.KatEvent, { cascade: true, onDelete: 'CASCADE'})
//     @JoinColumn({name: "id_kategori_event"})
//     Event: Eventls; 
}