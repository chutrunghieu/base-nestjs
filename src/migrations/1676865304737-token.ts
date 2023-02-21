import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class token1676865304737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "token",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "data",
                    type: "varchar",
                },
                {
                    name: "userID",
                    type: 'int',
                    isNullable: false,
                },
            ],
        }),
            true,
        )
        await queryRunner.createForeignKey(
            'token',
            new TableForeignKey({
                columnNames: ['userID'],
                referencedTableName: 'user',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("token");
    }
}
