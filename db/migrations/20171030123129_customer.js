
exports.up = function(knex, Promise) {
    return knex.schema.createTable('customer', (table)=>{
        table.increments();
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('password');
        table.bigInteger('phone');
        table.boolean('email_status');
        table.text('address');
        table.string('apt_suite');
        table.string('city');
        table.string('state');
        table.integer('zip');
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('customer');
};