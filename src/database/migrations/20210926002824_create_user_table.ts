import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('person', 
        function (table) {
            table.integer('id').primary();
            table.string('name', 100).notNullable()
            table.string('email', 100).unique().notNullable()
            table.string('password', 8).unique().notNullable()
        }
    )
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('person');
}

