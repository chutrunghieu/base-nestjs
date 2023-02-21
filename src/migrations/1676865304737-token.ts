import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class token1676865304737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tokens",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
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
            'tokens',
            new TableForeignKey({
                columnNames: ['userID'],
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE'
            })
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tokens");
    }
}
