import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1672953674490 implements MigrationInterface {
    name = 'createTables1672953674490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "todo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "its_complete" boolean DEFAULT false, "user_id" uuid, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "FK_9cb7989853c4cb7fe427db4b260" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_9cb7989853c4cb7fe427db4b260"`);
        await queryRunner.query(`DROP TABLE "todo"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
