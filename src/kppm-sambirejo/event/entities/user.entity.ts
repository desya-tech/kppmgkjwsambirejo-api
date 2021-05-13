import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  nama: string;

  @Column()
  id_kelompok: string;

  @Column()
  no_hp: string;

  @Column()
  instagram: string;

  @Column()
  id_gereja: number;
}