import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateNoticia1686766033270 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "noticia",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "title", type: "varchar", length: "155", isNullable: false },
          { name: "subtitle", type: "varchar", length: "255", isNullable: false  },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("noticia");
  }
}
