exports.up = function(knex, Promise) {
    return knex.schema.createTable('product', (table)=>{
        table.increments();
        table.integer('category_id')
        .references('id')
        .inTable('category')
        .onDelete('CASCADE')
        .index();
        table.string('product_name');
        table.text('product_description');
        table.integer('quantity');
        table.decimal('price');
        
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('product');
};