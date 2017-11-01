
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('product').del(),

    // productts seed ries
    knex('product').insert({id: 1, product_name: "landscape print", product_description: "beautiful landscape", image: "https://cdn.filestackcontent.com/C5rU8bISTqs2HD34SLp9", quantity: 7, price: 50.00, sales_tax: .056, category_id:1}),
    knex('product').insert({id: 2, product_name: "flowers", product_description: "spring flowers", image: "https://cdn.filestackcontent.com/K4hWMqOxQPWvoSlF5BjQ", quantity: 1, price: 350.00, sales_tax: .056, category_id:2}),
    knex('product').insert({id: 3, product_name: "ocean", product_description: "stormy waves", image: "https://cdn.filestackcontent.com/ckaIPuN4S9usL7Mnyrdu", quantity: 14, price: 50.00, sales_tax: .056, category_id:1}),
    knex('product').insert({id: 4, product_name: "abstract", product_description: "minds eye", image: "https://cdn.filestackcontent.com/FWlbv3HZRUmdGlyCSIrQ", quantity: 1, price: 450.00, sales_tax: .056, category_id:2})

  );
};
