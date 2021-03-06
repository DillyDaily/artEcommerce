const knex = require("../db/knex.js");

module.exports = {

  // USER EXPERIENCE
  index: function(req, res) {
    knex('product')
      .then((result)=>{

          let userLogged = req.session.user ? true:false;
          res.render("product", {product: result, isLogged: userLogged});
      })
  },

  userGetOne: function(req,res){
    knex('product')
      .where('id', req.params.id)
      .then((result)=>{
        let userLogged = req.session.user ? true:false;
        res.render("product_profile", {item: result[0], isLogged: userLogged})
      })
  },

  addToCart: function(req, res) {

    console.log("hello")
    knex('product')
      .where('id', req.params.id)
      .then((result)=>{

        req.session.cart.push(result[0].id);
        req.session.save(()=>{

          res.redirect('/cart')
        })
      })
    // res.render("cart", {cartObj: res.session.cart});
  },

  //ADMIN EXPERIENCE
  getAll: function(req, res) {
    knex('product')
      .then((result)=> {
      knex('category')
      .then((category)=>{

        res.render("product_dashboard", {product: result, category:category});
      })

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
      .then((product)=>{
    knex('category')
        .then((category)=>{
          res.render('admin_create_product', {product: product, category: category})
        })
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
        category_id: req.body.category_id

        // sales_tax: req.body.tax
      }) // updated from '}, )' to '})'
      .then((result)=>{
        res.redirect('/admin_product_dashboard');
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

        res.redirect('/admin_product/'+ req.params.id)
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
