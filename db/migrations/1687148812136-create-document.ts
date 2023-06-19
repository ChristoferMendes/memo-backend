import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDocument1687148812136 implements MigrationInterface {
  name = 'CreateDocument1687148812136';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "document" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image_url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "userId" integer, CONSTRAINT "PK_e57d3357f83f3cdc0acffc3d777" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "document" ADD CONSTRAINT "FK_7424ddcbdf1e9b067669eb0d3fd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "document" DROP CONSTRAINT "FK_7424ddcbdf1e9b067669eb0d3fd"`,
    );
    await queryRunner.query(`DROP TABLE "document"`);
  }
}
