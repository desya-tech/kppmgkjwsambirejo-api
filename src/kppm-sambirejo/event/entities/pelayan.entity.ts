import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('pelayan')
export class Pelayan {
  @PrimaryGeneratedColumn()
  id_pelayan: number;

  @Column()
  nama_pelayan: string;

  @Column()
  jabatan: string;

  @Column()
  id_gereja: number;

  @Column()
  no_hp: string;
}