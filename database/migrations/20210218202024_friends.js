
exports.up = function(knex) {
  return knex.schema
  .createTable("friends" , tbl => {
      tbl.increments();
      tbl.string("name", 125).notNullable()
      tbl.string("type", 125).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExsists("friends")
};
