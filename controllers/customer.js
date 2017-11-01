const knex = require("../db/knex.js");
const encryption = require('../config/encryption.js');

module.exports = {

  login: function(req, res){

    res.render('customer_login', {message: req.session.message});
  },

  register: function(req, res){
    encryption.hash(req.body).then((encryptedUser)=>{

      knex('customer')
        .insert(encryptedUser)
        .then(()=>{
          req.session.message = "You have successfully registered! Please log in.";
          res.redirect('/customer_login');
        })
        .catch(()=>{
          req.session.message = "You entered invalid data. Please register again."
          res.redirect('/customer_login');
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
            res.redirect('/');
          }else{
            req.session.message = "You entered an invalid username or password.";
            res.redirect('/customer_login');
          }
        })
      })
      .catch((err)=>{
        req.session.message = "You entered an invalid username or password."
        res.redirect('/customer_login')
      })
  }

}
