import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class users1676865299448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
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
                    default: 0
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
            'user',
            new TableForeignKey({
              columnNames: ['roleID'],
              referencedTableName: 'role',
              referencedColumnNames: ['id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            })
          );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }
}
