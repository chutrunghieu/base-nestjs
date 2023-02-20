import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class users1676865299448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "age",
                    type: "int",
                },
                {
                    name: "roleID",
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: "tokenID",
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'datetime',
                    default: 'now()',
                }
            ]
        }), true)
        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
              columnNames: ['roleID'],
              referencedTableName: 'roles',
              referencedColumnNames: ['id'],
              onDelete: 'SET DEFAULT'
            })
          );
          await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
                columnNames: ['tokenID'],
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE'
            })
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
