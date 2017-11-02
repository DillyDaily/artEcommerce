
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('product').del(),

    // productts seed ries
    knex('product').insert({id: 1, product_name: "White Lips", product_description: "Pop Art", image: "https://pre00.deviantart.net/93cc/th/pre/f/2017/306/e/e/eeb941ac1087d52717c87c9e38526c17-dbsi5x9.jpg", quantity: 7, price: 50.00, sales_tax: .056, category_id:1}),
    knex('product').insert({id: 2, product_name: "Woman With Hat Three", product_description: "Postcard", image: "https://pre00.deviantart.net/0c07/th/pre/f/2017/306/d/7/d75e8ae514a07db0b0831cd197dc99a4-dbsi5vq.jpg", quantity: 1, price: 350.00, sales_tax: .056, category_id:2}),
    knex('product').insert({id: 3, product_name: "Woman With Hat Four", product_description: "Postcard", image: "https://pre00.deviantart.net/c1c4/th/pre/f/2017/306/6/4/6468bf320940a2b3a7aa2e411e586ad1-dbsi5vc.jpg", quantity: 14, price: 50.00, sales_tax: .056, category_id:1}),
    knex('product').insert({id: 4, product_name: "Self Portrait 3", product_description: "Pop Art", image: "https://pre00.deviantart.net/69a6/th/pre/f/2017/306/6/c/6c0386ee8fd0cd5d659dc235c55fd5bc-dbsi5ut.jpg", quantity: 1, price: 450.00, sales_tax: .056, category_id:2})

  );
};
