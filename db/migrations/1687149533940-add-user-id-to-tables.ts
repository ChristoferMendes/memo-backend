import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserIdToTables1687149533940 implements MigrationInterface {
  name = 'AddUserIdToTables1687149533940';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "background" ADD "user_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "document" ADD "user_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "card" ADD "user_id" integer NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "user_id"`);
    await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "user_id"`);
    await queryRunner.query(`ALTER TABLE "background" DROP COLUMN "user_id"`);
  }
}
