exports.up = function(knex, Promise) {
    return knex.schema.createTable('images', (table)=>{
        table.increments();
        table.text('link');
        table.integer('product_id')
            .references('id')
            .inTable('product')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('images');
};