import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class token1676865204737 implements MigrationInterface {

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
            ],
        }),
            true,
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tokens");
    }
}
