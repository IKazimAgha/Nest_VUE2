import { Leaves } from 'src/leaves/leaves.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    name: 'email',
    nullable: false,
    unique: true
  })
  email: string;

  @Column({
      nullable: false,
      default: '',
  })
  password: string;

    @Column({
        nullable: false,
        default: new Date(),
        type: 'timestamptz'
    })
    created_at: Date;

    @Column({
        name: 'access_token',
        nullable: false,
        default: '',
        unique: true
    })
    access_token: string;

    @OneToOne(type => Leaves, leaves => leaves.id)
    @JoinColumn()
    leaves: Leaves
}