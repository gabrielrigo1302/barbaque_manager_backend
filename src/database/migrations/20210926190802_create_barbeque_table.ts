import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('barbeque', 
    function (table) {
        table.integer('id').primary();
        table.integer('userId').references('user.id');
        table.date('date').notNullable();
        table.string('reason', 40).notNullable();
        table.integer('peopleQuantity');
        table.float('coust');
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('barbeque');
}

