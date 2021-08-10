import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateTest1618424922440 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tests',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'deadline',
                    type: 'timestamp with time zone',
                },
                {
                    name: 'subnum',
                    type: 'int',
                },
                {
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'block',
                    type: 'int',
                },
                {
                    name: 'congruency',
                    type: 'int',
                },
                {
                    name: 'trial',
                    type: 'int',
                },
                {
                    name: 'stim',
                    type: 'int',
                },
                {
                    name: 'resp',
                    type: 'int',
                },
                {
                    name: 'corr',
                    type: 'int',
                },
                {
                    name: 'rt',
                    type: 'varchar',
                },
                {
                    name: 'tooslow',
                    type: 'int',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        }))

    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tests');
    }

}
