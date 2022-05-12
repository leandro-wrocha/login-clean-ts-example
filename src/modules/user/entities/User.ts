import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: String;

  @Column()
  username: String;

  @Column()
  password: String;

  // constructor() {
  //   if (!this.id) {
  //     this.id = randomUUID();
  //   }
  // }
}
