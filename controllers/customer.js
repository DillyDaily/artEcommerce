const knex = require("../db/knex.js");
const encryption = require('../config/encryption.js');

module.exports = {

  login: function(req, res){
    if(!req.session.userMsg){
      req.session.userMsg = "";
    }
    res.render('customer_login', {message: req.session.userMsg});
  },

  register: function(req, res){
    encryption.hash(req.body).then((encryptedUser)=>{
      knex('customer')
        .insert({
          first_name: encryptedUser.first_name,
          last_name: encryptedUser.last_name,
          email: encryptedUser.email,
          password: encryptedUser.password,
          phone: encryptedUser.phone,
          email_status: true,
          address: encryptedUser.address,
          apt_suite: encryptedUser.apt_suite,
          city: encryptedUser.city,
          state: encryptedUser.state,
          zip: encryptedUser.zip
        })
        .then(()=>{
          req.session.userMsg = "You have successfully registered! Please log in to continue!";
          req.session.save(()=>{
            res.redirect('/register_login');
          })

        })
        .catch((err)=>{
          console.log(err);
          req.session.userMsg = "You entered invalid data. Please register again."
          res.redirect('/register_login');
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
              res.redirect('/register_login');
            });
            console.log("You have successfully logged in. " +  req.session.user);

            req.session.userMsg = "You have successfully logged in.";
          }else{
            req.session.userMsg = "You entered an invalid email or password.";
            res.redirect('/register_login');
          }
        })
      })
      .catch((err)=>{
        req.session.userMsg = "You entered an invalid email or password."
        res.redirect('/register_login')
      })
  }

}
