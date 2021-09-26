import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('personToFood', 
    function (table) {
        table.integer('id').primary();
        table.integer('personId').references('person.id');
        table.integer('foodId').references('food.id');
        table.boolean('isSelected').notNullable().defaultTo(false);
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('personToFood');
}


