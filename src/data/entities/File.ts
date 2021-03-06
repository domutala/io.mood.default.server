import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

/**
 * @author domutala
 * @description cette table contient les information sur les fichiers
 * @version 0.2.0
 */
@Entity()
export class File extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column({ nullable: true })
  name!: string;

  @Column()
  type!: string;

  @Column()
  value!: string;

  @Column()
  path!: string;

  /** id de l'utilisateur qui a ajouté le fichier */
  @Column()
  user!: string;
}
