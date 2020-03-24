exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.String('id').primary();
    table.String('name').notNullable();
    table.String('email').notNullable();
    table.String('whatsapp').notNullable();
    table.String('city').notNullable();
    table.String('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
