import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('sosial_media_contact')
export class Sosmed {
  @PrimaryGeneratedColumn()
  id_sosial_media: number;

  @Column()
  nama_sosmed: string;

  @Column()
  alamat_sosmed: string;
}