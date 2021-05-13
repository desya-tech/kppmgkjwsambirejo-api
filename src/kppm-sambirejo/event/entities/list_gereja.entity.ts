import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('list_gereja')
export class LsGrj {
  @PrimaryGeneratedColumn()
  id_gereja: number;

  @Column()
  nama_gereja: string;
}