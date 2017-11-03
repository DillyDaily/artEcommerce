exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('customer').del(),

    // Inserts seed entries
    knex('customer').insert({first_name: "Christa", last_name: "Harris", email: "chp@gmail.com", password: "$2a$10$5hTqg/oRFc9mEQaglO6QC.X6iLkDuX0XjEme61wPXTcjsQyfZQhuG", phone: "2223334444", address: "123 E. Abc St", apt_suite: "101", city: "Chicago", state: "IL", zip: 60007}),
    knex('customer').insert({first_name: "Marie", last_name: "Walker", email: "mw@gmail.com", password: "$2a$10$5hTqg/oRFc9mEQaglO6QC.X6iLkDuX0XjEme61wPXTcjsQyfZQhuG", phone: "2223334444", address: "123 E. Abc St", apt_suite: "101", city: "Chicago", state: "IL", zip: 60007}),
    knex('customer').insert({first_name: "Rahul", last_name: "TJ", email: "rtj@gmail.com", password: "$2a$10$5hTqg/oRFc9mEQaglO6QC.X6iLkDuX0XjEme61wPXTcjsQyfZQhuG", phone: "2223334444", address: "123 E. Abc St", apt_suite: "101", city: "Chicago", state: "IL", zip: 60007}),
    knex('customer').insert({first_name: "Ali", last_name: "Finney", email: "af@gmail.com", password: "$2a$10$5hTqg/oRFc9mEQaglO6QC.X6iLkDuX0XjEme61wPXTcjsQyfZQhuG", phone: "2223334444", address: "123 E. Abc St", apt_suite: "101", city: "Chicago", state: "IL", zip: 60007})

  );
};
