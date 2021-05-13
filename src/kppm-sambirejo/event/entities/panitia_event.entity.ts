import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('panitia_event')
export class PntEvn {
  @PrimaryGeneratedColumn()
  id_pelayan_event: number;

  @Column()
  id_event: number;

  @Column()
  id_role_event: number;

  @Column()
  id_user: number;
}