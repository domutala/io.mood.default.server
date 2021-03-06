import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 * @author domutala
 * @version 0.2.0
 */
@Entity()
export class Client extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  data!: { [key: string]: any };

  @Column({ type: "datetime" })
  @CreateDateColumn()
  created_at!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updated_at!: Date;
}
