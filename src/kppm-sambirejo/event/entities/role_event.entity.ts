import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('role_event')
export class RoleEvn {
  @PrimaryGeneratedColumn()
  id_role_event: number;

  @Column()
  nama_role_event: string;

  @Column()
  keterangan: string;
}