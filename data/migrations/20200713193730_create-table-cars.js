

exports.up = function(knex) {
    return knex.schema.createTable("cars", (table) => {
        table.increments("id"),
        table.string("vin", 17).unique().notNullable(),
        table.string("make", 50).notNullable(),
        table.string("model", 100).notNullable(),
        table.integer("year").notNullable(),
        table.integer("mileage").notNullable(),
        table.string("titleStatus", 50).nullable(),
        table.string("transmission", 50).nullable(),
        table.text("notes").nullable()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("cars");
};
