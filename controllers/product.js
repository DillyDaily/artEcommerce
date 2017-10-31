const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('product')
      .then((result)=>{
    knex('images')
        .then((images)=>{
          
          
          res.render("product", {product: result, img: images});
        })
      })
  },

  getAll: function(req, res) {
    knex('product')
      .then((result)=> {

        res.render("admin_edit_product", {product: result});
      })
      .catch((err)=>{
        console.error(err)
      })
  },

  getOne: function(req, res) {
    knex('product')
      .where('id', req.params.id)
      .then((product)=>{
        let item = product[0];
        res.render('work', {art: item})
      })
  },

  addOne: function(req, res){
    knex('product')
      .then((result)=>{

        res.render('admin_dashboard', {product: result})
      })

  },

  create: function(req, res){
    knex('product')
      .insert({
        product_name: req.body.name,
        product_description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        sales_tax: req.body.tax
      }, '*')
      .then((result)=>{
        res.redirect('/admin_dashboard');
      })
      .catch((err)=>{
        console.error(err)
      })
  },

  edit: function(req, res) {
    knex('product')
      .then((result)=>{
        let editProduct = result[0];

        res.render('admin_edit_product')
      })
  },

  update: function(req, res){
    knex('product')
      .update({
        product_name: req.body.name,
        product_description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        sales_tax: req.body.tax
      })
      .where('id', req.params.id)
      .then(()=>{

        res.redirect('/admin_dashboard')
      })
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
