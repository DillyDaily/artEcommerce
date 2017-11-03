
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('order_status').del(),

    // customer_ide ,d 7, category_id:1}),
    knex('order_status').insert({order_id: 1, status_processed: true, status_shipped: false}),
    knex('order_status').insert({order_id: 2, status_processed: false, status_shipped: false}),
    knex('order_status').insert({order_id: 3, status_processed: true, status_shipped: true})

  );
};
