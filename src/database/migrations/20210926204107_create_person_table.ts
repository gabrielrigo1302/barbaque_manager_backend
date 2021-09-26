import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('person', 
    function (table) {
        table.integer('id').primary();
        table.integer('barbequeId').references('barbeque.id');
        table.string('name', 100).notNullable();
        table.boolean('isPaid').notNullable().defaultTo(false);
        table.boolean('willDrink').notNullable().defaultTo(false);
        table.float('coust');
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('person');
}

