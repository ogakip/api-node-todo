import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Todo } from "./todo";

@Entity("users")
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Todo, (Todo) => Todo.user, { onDelete: "CASCADE" })
  todos: Todo[];
}
