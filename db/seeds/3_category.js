
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('category').del(),

    // Inserts seed entries
    knex('category').insert({category_name: "print", category_description: "prints of original artwork"}),
    knex('category').insert({category_name: "painting", category_description: "oil painting on canvas"})

  );
};