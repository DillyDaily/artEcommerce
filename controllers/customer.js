const knex = require("../db/knex.js");
const encryption = require('../config/encryption.js');

module.exports = {

  login: function(req, res){
    if(!req.session.userMsg){
      req.session.userMsg = "";
    }

    let userLogged = req.session.user ? true:false;

    res.render('customer_login', {message: req.session.userMsg, isLogged: userLogged});
  },

  register: function(req, res){
    encryption.hash(req.body).then((encryptedUser)=>{
      knex('customer')
        .insert(encryptedUser)
        .then(()=>{
          req.session.userMsg = "You have successfully registered! Please log in to continue!";
          req.session.save(()=>{
            res.redirect('/register_login');
          })

        })
        .catch((err)=>{
          console.log(err);
          req.session.userMsg = "You entered invalid data. Please register again."
          req.session.save(()=>{
            res.redirect('/register_login');
          });

        })
    })
  },

  check: function(req, res){
    knex('customer')
      .where('email', req.body.email)
      .then((result)=>{

        let user = result[0];

        encryption.check(user, req.body).then((isValid)=>{
          if(isValid){
            req.session.user = user.id;

            req.session.save(()=>{
              res.redirect('/customer_profile');
            });
            req.session.userMsg = "You have successfully logged in.";
          }else{
            req.session.userMsg = "You entered an invalid email or password.";
            req.session.save(()=>{
              res.redirect('/register_login');
            });

          }
        })
      })
      .catch((err)=>{
        req.session.userMsg = "You entered an invalid email or password.";
        req.session.save(()=>{
          res.redirect('/register_login');
        });
      })
  },

  // This pulls customer's profile once logs in
  profile: function(req, res){
    knex('customer')
      .where('id', req.session.user)
      .then((customer)=>{
        knex('order_detail')
          .where('customer_id', req.session.user)
          .then((order_detail)=>{
            knex('product')
              .then((product)=>{

                // this checks if user is logged in or not. If logged in than it will make user profile menu appear in menus not user login
                let userLogged = req.session.user ? true:false;

                res.render('customer_profile', {user: customer[0], order: order_detail, product: product, isLogged: userLogged});
              })
          })
      })
  },

  // This will edit customer profile
  edit: function(req, res){
    knex('customer')
      .where('id', req.params.id)
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        apt_suite: req.body.apt_suite,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      })
      .then(()=>{
        req.session.save(()=>{
          res.redirect('/customer_profile');
        })
      })
  },


  // This will user log out
  logout: function(req, res){
    delete req.session.user;
    req.session.userMsg = "You successfully logged out!";
    req.session.save(()=>{
      res.redirect('/register_login');
    })
  }

}
