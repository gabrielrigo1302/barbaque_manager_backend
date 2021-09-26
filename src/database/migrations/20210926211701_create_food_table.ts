import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('food', 
    function (table) {
        table.integer('id').primary();
        table.string('name', 100).notNullable();
        table.float('coust');
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('food');
}


