import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1726132900708 implements MigrationInterface {
    name = 'InitMigration1726132900708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "variable_configs" ("key" character varying(255) NOT NULL, "value" integer NOT NULL, CONSTRAINT "PK_418dfb2bd59094506a7e8a2fbeb" PRIMARY KEY ("key"))`);
        await queryRunner.query(`CREATE TABLE "driver_attendances" ("id" SERIAL NOT NULL, "driver_code" character varying(255) NOT NULL, "attendance_date" date NOT NULL, "attendance_status" boolean NOT NULL, CONSTRAINT "UQ_9ec2793ae0519fc4722087e9a18" UNIQUE ("driver_code", "attendance_date"), CONSTRAINT "PK_56a441eeba7e854911627100b99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "drivers" ("id" SERIAL NOT NULL, "driver_code" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "UQ_03721edec625c978dca70da5224" UNIQUE ("driver_code"), CONSTRAINT "PK_92ab3fb69e566d3eb0cae896047" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shipment_costs" ("id" SERIAL NOT NULL, "driver_code" character varying(255) NOT NULL, "shipment_no" character varying(255) NOT NULL, "total_costs" numeric(10,2) NOT NULL, "cost_status" character varying(255) NOT NULL, CONSTRAINT "UQ_bb2fac7eb4d722dd38b2283d180" UNIQUE ("driver_code", "shipment_no"), CONSTRAINT "PK_449278bd08ea3bdd036cf1b3a1a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shipments" ("shipment_no" character varying(255) NOT NULL, "shipment_date" date NOT NULL, "shipment_status" character varying(255) NOT NULL, CONSTRAINT "PK_7cd051344b07f190d24d9dcd3db" PRIMARY KEY ("shipment_no"))`);
        await queryRunner.query(`ALTER TABLE "driver_attendances" ADD CONSTRAINT "FK_e366cc0825250ead327f061a395" FOREIGN KEY ("driver_code") REFERENCES "drivers"("driver_code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment_costs" ADD CONSTRAINT "FK_12ee1efeb5b550e3145d9d5f31c" FOREIGN KEY ("driver_code") REFERENCES "drivers"("driver_code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment_costs" ADD CONSTRAINT "FK_a677fad15724d22a0f1f5cb77c3" FOREIGN KEY ("shipment_no") REFERENCES "shipments"("shipment_no") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "shipment_costs" DROP CONSTRAINT "FK_a677fad15724d22a0f1f5cb77c3"`);
        await queryRunner.query(`ALTER TABLE "shipment_costs" DROP CONSTRAINT "FK_12ee1efeb5b550e3145d9d5f31c"`);
        await queryRunner.query(`ALTER TABLE "driver_attendances" DROP CONSTRAINT "FK_e366cc0825250ead327f061a395"`);
        await queryRunner.query(`DROP TABLE "shipments"`);
        await queryRunner.query(`DROP TABLE "shipment_costs"`);
        await queryRunner.query(`DROP TABLE "drivers"`);
        await queryRunner.query(`DROP TABLE "driver_attendances"`);
        await queryRunner.query(`DROP TABLE "variable_configs"`);
    }

}
