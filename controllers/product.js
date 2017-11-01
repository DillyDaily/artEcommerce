const knex = require("../db/knex.js");

module.exports = {

  // USER EXPERIENCE
  index: function(req, res) {
    knex('product')
      .then((result)=>{
        
          res.render("product", {product: result});
      })
  },

  userGetOne: function(req,res){
    knex('product')
      .where('id', req.params.id)
      .then((result)=>{

        res.render("product_profile", {item: result[0]})
      })
  },


  //ADMIN EXPERIENCE
  getAll: function(req, res) {
    knex('product')
      .then((result)=> {
      console.log(result);
        res.render("product_dashboard", {product: result});
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
        res.render('admin_product_profile', {art: item})
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
        image: req.body.image,
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

        res.render('admin_edit_product', {product: editProduct})
      })
  },

  update: function(req, res){
    knex('product')
      .update({
        product_name: req.body.name,
        product_description: req.body.description,
        image: req.body.image,
        quantity: req.body.quantity,
        price: req.body.price,
        sales_tax: req.body.tax
      })
      .where('id', req.params.id)
      .then(()=>{

        res.redirect('/admin_product_profile')
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
