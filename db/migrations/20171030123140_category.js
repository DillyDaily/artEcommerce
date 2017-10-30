exports.up = function(knex, Promise) {
    return knex.schema.createTable('category', (table)=>{
        table.increments();
        table.string('category_name');
        table.text('category_description');
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('category');
};