import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBackground1687148252869 implements MigrationInterface {
  name = 'CreateBackground1687148252869';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."background_screen_enum" AS ENUM('Login', 'Register', 'Home', 'Documents', 'Cards', 'Settings')`,
    );
    await queryRunner.query(
      `CREATE TABLE "background" ("id" SERIAL NOT NULL, "screen" "public"."background_screen_enum" NOT NULL, "image_url" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_7271b4d2e4bd0f68b3fdb5c090a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "background" ADD CONSTRAINT "FK_0b97b6d92d5cceb85ce6059e49a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "background" DROP CONSTRAINT "FK_0b97b6d92d5cceb85ce6059e49a"`,
    );
    await queryRunner.query(`DROP TABLE "background"`);
    await queryRunner.query(`DROP TYPE "public"."background_screen_enum"`);
  }
}
