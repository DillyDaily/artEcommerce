const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
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

  create: function(req, res){
    knex('product')
      .insert({})
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
