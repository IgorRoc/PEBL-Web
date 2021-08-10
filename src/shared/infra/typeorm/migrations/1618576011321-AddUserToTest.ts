import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddUserToTest1618576011321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tests', new TableColumn({
            name: 'user_id',
            type: 'uuid',
            isNullable: true,
        }));

        await queryRunner.createForeignKey('tests', new TableForeignKey({
            name: 'UserToTest',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        })); 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tests', 'UserToTest');
        
        await queryRunner.dropColumn('tests', 'user_id');
    }

}
