import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1641914637532 implements MigrationInterface {
    name = 'FirstMigration1641914637532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_role" ("createdAt" datetime2 NOT NULL CONSTRAINT "DF_01757362761f9c16942cf68edce" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_e4248ad4ce1cd00aea4973cc4dd" DEFAULT getdate(), "deletedAt" datetime2, "id" int NOT NULL IDENTITY(1,1), "roleName" varchar(30) NOT NULL, "description" varchar(255), CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_d0de24b67e93878c5beb80a24c" ON "user_role" ("roleName") `);
        await queryRunner.query(`CREATE TABLE "user" ("createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), "deletedAt" datetime2, "id" int NOT NULL IDENTITY(1,1), "email" varchar(254) NOT NULL, "firstName" varchar(50) NOT NULL, "lastName" varchar(75) NOT NULL, "password" varchar(255) NOT NULL, "numberOfSuccessfulLogins" int NOT NULL CONSTRAINT "DF_ff4323dac9517cdd77980e9726e" DEFAULT 0, "numberOfpasswordUpdates" int NOT NULL CONSTRAINT "DF_f3658257007d56255bf146e950c" DEFAULT 0, "numberOfFailedLogins" int NOT NULL CONSTRAINT "DF_a94a8176bad12e341c8cba46bd3" DEFAULT 0, "tokenHash" varchar(100), "timeOfLastSuccessfulLogin" datetime, "timeOfLastFailedLogin" datetime, "timeOfLastPasswordUpdate" datetime, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
        await queryRunner.query(`CREATE TABLE "user_roles_user_role" ("userId" int NOT NULL, "userRoleId" int NOT NULL, CONSTRAINT "PK_cd5bf7bedcc5f7671f0a97b9224" PRIMARY KEY ("userId", "userRoleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dc94447a3cabad70eb2c96f5e1" ON "user_roles_user_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4698620c2fcf96fdbabb09f384" ON "user_roles_user_role" ("userRoleId") `);
        await queryRunner.query(`ALTER TABLE "user_roles_user_role" ADD CONSTRAINT "FK_dc94447a3cabad70eb2c96f5e1d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles_user_role" ADD CONSTRAINT "FK_4698620c2fcf96fdbabb09f3844" FOREIGN KEY ("userRoleId") REFERENCES "user_role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles_user_role" DROP CONSTRAINT "FK_4698620c2fcf96fdbabb09f3844"`);
        await queryRunner.query(`ALTER TABLE "user_roles_user_role" DROP CONSTRAINT "FK_dc94447a3cabad70eb2c96f5e1d"`);
        await queryRunner.query(`DROP INDEX "IDX_4698620c2fcf96fdbabb09f384" ON "user_roles_user_role"`);
        await queryRunner.query(`DROP INDEX "IDX_dc94447a3cabad70eb2c96f5e1" ON "user_roles_user_role"`);
        await queryRunner.query(`DROP TABLE "user_roles_user_role"`);
        await queryRunner.query(`DROP INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP INDEX "IDX_d0de24b67e93878c5beb80a24c" ON "user_role"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
    }

}
