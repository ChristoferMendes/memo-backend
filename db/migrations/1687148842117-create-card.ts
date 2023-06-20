import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCard1687148842117 implements MigrationInterface {
  name = 'CreateCard1687148842117';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "card" ("id" SERIAL NOT NULL, "card_number" character varying NOT NULL, "expiration_date" TIMESTAMP NOT NULL, "cvv" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "userId" integer, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "card" ADD CONSTRAINT "FK_77d7cc9d95dccd574d71ba221b0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card" DROP CONSTRAINT "FK_77d7cc9d95dccd574d71ba221b0"`,
    );
    await queryRunner.query(`DROP TABLE "card"`);
  }
}
