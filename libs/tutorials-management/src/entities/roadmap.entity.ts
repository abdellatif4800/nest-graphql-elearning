import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Users } from 'apiLibs/users-managment';
import { Tutorial } from './tutorial.entity';

@Entity('roadmaps')
export class Roadmap {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToOne(() => Users, (user) => user.roadmaps, { onDelete: 'CASCADE' })
  author: Users;

  @Column({ type: 'uuid' })
  authorId: string;

  /** Tutorials in this roadmap */
  @ManyToMany(() => Tutorial, (tutorial) => tutorial.roadmaps, {
    cascade: true,
  })
  @JoinTable({
    name: 'roadmap_tutorials', // join table
    joinColumn: { name: 'roadmapId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tutorialId', referencedColumnName: 'id' },
  })
  tutorials: Tutorial[];

  /** Timestamps */
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
