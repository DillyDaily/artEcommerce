exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_detail', (table)=>{
        table.increments();
        table.integer('customer_id')
            .references('id')
            .inTable('customer')
            .onDelete('CASCADE')
            .index();
        table.integer('product_id')
            .references('id')
            .inTable('product')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order_detail');
};