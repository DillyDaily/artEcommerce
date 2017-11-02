
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('order_detail').del(),

    // customer_ide ,d 7, category_id:1}),
    knex('order_detail').insert({id: 1, customer_id: 1, product_id: 1, item_name: "artwork1", quantity: 1, price: 50.00, description: "stuff and things"}),
    knex('order_detail').insert({id: 2, customer_id: 2, product_id: 2, item_name: "artwork2", quantity: 4, price: 50.00, description: "other stuff and things"}),
    knex('order_detail').insert({id: 3, customer_id: 3, product_id: 3, item_name: "artwork3", quantity: 2, price: 50.00, description: "final stuff and things"})

  );
};
