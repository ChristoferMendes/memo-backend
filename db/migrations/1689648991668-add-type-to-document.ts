import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTypeToDocument1689648991668 implements MigrationInterface {
  name = 'AddTypeToDocument1689648991668';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."document_type_enum" AS ENUM('CPF', 'RG', 'CNH', 'PASSPORT', 'VACCINE', 'ID', 'OTHER')`,
    );
    await queryRunner.query(
      `ALTER TABLE "document" ADD "type" "public"."document_type_enum" NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "type"`);
    await queryRunner.query(`DROP TYPE "public"."document_type_enum"`);
  }
}
