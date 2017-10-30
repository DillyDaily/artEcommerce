exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_status', (table)=>{
        table.increments();
        table.integer('order_id')
            .references('id')
            .inTable('order_detail')
            .onDelete('CASCADE')
            .index();
        table.boolean('status_processed');
        table.boolean('status_shipped');
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order_status');
};