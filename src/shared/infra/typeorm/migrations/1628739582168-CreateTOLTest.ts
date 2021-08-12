import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTOLTest1628739582168 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tol',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'deadline',
                        type: 'varchar'
                    },
                    {
                        name: 'sub',
                        type: 'varchar'
                    },
                    {
                        name: 'trial',
                        type: 'varchar'
                    },
                    {
                        name: 'size',
                        type: 'varchar'
                    },
                    {
                        name: 'current',
                        type: 'varchar'
                    },
                    {
                        name: 'end',
                        type: 'varchar'
                    },
                    {
                        name: 'step',
                        type: 'varchar'
                    },
                    {
                        name: 'reset',
                        type: 'varchar'
                    },
                    {
                        name: 'tries',
                        type: 'varchar'
                    },
                    {
                        name: 'score',
                        type: 'varchar'
                    },
                    {
                        name: 'abstime',
                        type: 'varchar'
                    },
                    {
                        name: 'trialtime',
                        type: 'varchar'
                    },
                    {
                        name: 'clicktime',
                        type: 'varchar'
                    },
                    {
                        name: 'done',
                        type: 'varchar'
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tol')
    }

}
