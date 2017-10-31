const knex = require("../db/knex.js");

module.exports = {
  // This will take admin to admin login page - Rahul
  login: function(req, res){
<<<<<<< HEAD
    res.render('admin_login', {message: req.session.message});
=======
    res.render('register_login', {message: req.session.message});
  },

  register: function(req, res){
    encryption.hash(req.body).then((encryptedUser)=>{

      knex('customer')
        .insert(encryptedUser)
        .then(()=>{
          req.session.message = "You have successfully registered! Please log in.";
          res.redirect('/contact/:id');
        })
        .catch(()=>{
          req.session.message = "You entered invalid data. Please register again."
          res.redirect('/contact/:id');
        })
    })
>>>>>>> master
  },
  // This will check admin email and password - Rahul
  check: function(req, res){
    knex('admin')
      .where('email', req.body.email)
      .then((result)=>{

        let admin = result[0];

        encryption.check(user, req.body).then((isValid)=>{
          if(isValid){
            req.session.admin = admin.id;
            req.session.save(()=>{
              res.redirect('/admin_dashboard');
            });

          }else{
            req.session.message = "You entered an invalid email or password.";
            req.session.save(()=>{
              res.redirect('/admin_login');
            })

          }
        })
      })
      .catch((err)=>{
        req.session.message = "You entered an invalid email or password."
        req.session.save(()=>{
          res.redirect('/admin_login');
        })

      })
  },

  // This will bring to admin dashboard page - Rahul
  // This renders customer, order_detail and order_status table
  dashboard: function(req, res){
    knex('customer')
      .then((customer)=>{
        knex('order_detail')
          .then((order_detail)=>{
            knex('order_status')
              .then((order_status)=>{
                render('admin_dashboard', {customer: customer, order_detail: order_detail, order_status, order_status});
              })
          })
      })
  },
  // It brings all categories on category page - Rahul
  categoryGetAll: function(req, res){
    knex('category')
      .then((result)=>{
        res.render('admin_product_category');
      })
  },

  // It displays one category - Rahul
  categoryGetOne: function(req, res){
    res.render('Tesing Display One Category');
  },

  // It creates new category - Rahul
  create: function(req, res){
    res.render('Testing Create Category')
  },

  // It takes you to edits cagetory page - Rahul
  categoryEdit: function(req, res){
    res.render('Testing Edit Category');
  },

  // It makes changes in category - Rahul
  categoryUpdate: function(req, res){
    res.render('Testing Update Category');
  }

  // It deletes category - Rahul
  categoryDelete: function(req, res){
    res.render('Testing Delete Category');
  }











}
