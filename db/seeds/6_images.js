

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('images').del(),

    // customer_ide ,d 7, category_id:1}),
    knex('images').insert({link: "https://images.unsplash.com/photo-1503289408281-f8314bf417c3?auto=format&fit=crop&w=2552&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D", product_id: 1}),
    knex('images').insert({link: "https://images.unsplash.com/photo-1503289408281-f8314bf417c3?auto=format&fit=crop&w=2552&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D", product_id: 2}),
    knex('images').insert({link: "https://images.unsplash.com/photo-1503289408281-f8314bf417c3?auto=format&fit=crop&w=2552&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D", product_id: 3})

  );
};
