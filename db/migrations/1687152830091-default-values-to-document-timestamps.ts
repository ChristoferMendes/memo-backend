import { MigrationInterface, QueryRunner } from 'typeorm';

export class DefaultValuesToDocumentTimestamps1687152830091
  implements MigrationInterface
{
  name = 'DefaultValuesToDocumentTimestamps1687152830091';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "document" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "document" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "document" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
    await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "updated_at"`);
  }
}
