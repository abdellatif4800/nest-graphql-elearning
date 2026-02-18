import { UserRole } from 'apiLibs/common';
import { Tutorial } from 'apiLibs/tutorials-management';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isBlocked: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @OneToMany(() => Tutorial, (tutorial) => tutorial.author)
  tutorials: Tutorial[];

  /** Timestamps */
  @CreateDateColumn({ default: new Date() })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
