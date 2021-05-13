import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('status')
export class Status {
  @PrimaryGeneratedColumn()
  id_status: number;

  @Column()
  nama_status: string;
}