const knex = require("../db/knex.js");

module.exports = {
  // This will take admin to admin login page
  login: function(req, res){

    res.render('admin_login', {message: req.session.message});
  },
  // This will check admin email and password
  check: function(req, res){
    knex('admin')
      .where('email', req.body.email)
      .then((result)=>{

        let admin = result[0];

        encryption.check(user, req.body).then((isValid)=>{
          if(isValid){
            req.session.admin = admin.id;
            res.redirect('/admin_dashboard');
          }else{
            req.session.message = "You entered an invalid username or password.";
            res.redirect('/admin_login');
          }
        })
      })
      .catch((err)=>{
        req.session.message = "You entered an invalid username or password."
        res.redirect('/admin_login')
      })
  }

}
