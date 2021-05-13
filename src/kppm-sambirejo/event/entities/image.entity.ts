import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('image')
export class Image {
  @PrimaryGeneratedColumn()
  id_image: number;

  @Column()
  nama_image: string;

  @Column()
  path: string;

  @Column()
  id_event: number;
}