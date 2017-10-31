const knex = require("../db/knex.js");

module.exports = {
  // This will take admin to admin login page - Rahul
  login: function(req, res){
    res.render('admin_login', {message: req.session.message});
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
  }

}
