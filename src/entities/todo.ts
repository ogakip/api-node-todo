import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./users";

@Entity("todo")
export class Todo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    nullable: true,
    default: false
  })
  its_complete: boolean;

  @ManyToOne(() => User, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
