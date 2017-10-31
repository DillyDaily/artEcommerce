const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.send("Hello");
  },

  getAll: function(req, res) {
    res.render("product");
  },

  getOne: function(req, res) {
    knex('product')
      .where('id', req.params.id)
      .then((product)=>{

        res.render('work')
      })
  },

  addOne: function(req, res){
    knex('product')

  },

  create: function(req, res){
    knex('product')
      .insert({
        product_name: req.body.name,
        product_description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        sales_tax: req.body.tax
      })
  },

  edit: function(req, res) {
    knex('product')

  },

  update: function(req, res){

  },

  delete: function(req, res){
    knex('product')
      .del()
      .where('id', req.params.id)
      .then(()=>{
        res.redirect('/admin_product_dashboard')
      })
      .catch((err)=>{
        console.error(err)
      });
  }

}
