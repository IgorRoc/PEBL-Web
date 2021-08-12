import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStroopTest1628733185707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "stroop",
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
                        type: 'varchar',
                    },
                    {
                        name: 'round',
                        type: 'varchar',
                    },
                    {
                        name: 'block',
                        type: 'varchar',
                    },
                    {
                        name: 'trial',
                        type: 'varchar',
                    },
                    {
                        name: 'word',
                        type: 'varchar',
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                    },
                    {
                        name: 'part',
                        type: 'varchar',
                    },
                    {
                        name: 'xpos',
                        type: 'varchar',
                    },
                    {
                        name: 'ypos',
                        type: 'varchar',
                    },
                    {
                        name: 'resp',
                        type: 'varchar',
                    },
                    {
                        name: 'rname',
                        type: 'varchar',
                    },
                    {
                        name: 'correct',
                        type: 'varchar',
                    },
                    {
                        name: 'intrusion',
                        type: 'varchar',
                    },
                    {
                        name: 'numresponses',
                        type: 'varchar',
                    },
                    {
                        name: 'time0',
                        type: 'varchar',
                    },
                    {
                        name: 'timea',
                        type: 'varchar',
                    },
                    {
                        name: 'timeend',
                        type: 'varchar',
                    },
                    {
                        name: 'trialtime',
                        type: 'varchar',
                    },
                    {
                        name: 'responsetime',
                        type: 'varchar',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('stroop')
    }

}
