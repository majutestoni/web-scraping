import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("noticia")
class Noticia {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { length: 155, nullable: false })
  title: string;

  @Column("varchar", { length: 255, nullable: false })
  subtitle: string;

}

export default Noticia;
