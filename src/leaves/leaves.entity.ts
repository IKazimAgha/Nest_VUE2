import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Leaves {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  leave_value: string;

  @Column({
    nullable: false,
    default: '',
  })
  leave_type: string;
  
  @Column({
    nullable: false,
    default: '',
  })
  leave_nature: string;

  
  @Column({
    nullable: false,
    default: new Date(),
    type: 'timestamptz'
  })
  start_date: Date;

  
  @Column({
    nullable: false,
    default: new Date(),
    type: 'timestamptz'
  })
  end_date: Date;

  
  @Column({
    nullable: false,
    default: '',
  })
  assigned_to: string;
}