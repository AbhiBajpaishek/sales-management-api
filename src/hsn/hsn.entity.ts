import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Hsn {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'hsn_id',
  })
  id: number;

  @Column({
    nullable: false,
  })
  hsnNo: string;

  @Column({
    name: 'gst',
    nullable: false,
  })
  gst: string;
}
