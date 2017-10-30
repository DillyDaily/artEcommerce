exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('admin').del(),

    // Inserts seed entries
    knex('admin').insert({id: 1, first_name: "Christa", last_name: "Harris", email: "chp@gmail.com", password: "Welcome1"}),
    knex('admin').insert({id: 2, first_name: "Marie", last_name: "Walker", email: "mw@gmail.com", password: "Welcome1"}),
    knex('admin').insert({id: 3, first_name: "Rahul", last_name: "TJ", email: "rtj@gmail.com", password: "Welcome1"}),
    knex('admin').insert({id: 4, first_name: "Ali", last_name: "Finney", email: "af@gmail.com", password: "Welcome1"})

  );
};