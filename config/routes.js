//Update the name of the controller below and rename the file.
const about = require("../controllers/about.js");
const contact = require("../controllers/contact.js");
const home = require("../controllers/home.js");
const product = require("../controllers/product.js");
const register_login = require("../controllers/register_login.js");
const shoppingCart = require("../controllers/shoppingCart.js");
module.exports = function(app){

  app.get('/', home.index);

  app.get('/products', products.getAll);

  app.get('/about', about.getAll);

  app.get('/contact', contact.getAll);

  app.get('/register_login', register_login.login);  // CUSTOMER LOGIN

  app.post('/register_login', register_login.check);  // CHECK CUSTOMER

  app.post('/register_login', register_login.register);  // REGISTER NEW CUSTOMER

  app.get('/admin_login', admin.login);

  app.get('/admin_login', admin.check);

  // EVERYTHING BELOW THIS LINE IS PROTECTED
  app.use(userAuth);

  app.get('/contact/:id', contact.getOne);

  app.get('/contact/:id', contact.delete);

  app.get('/shoppingCart/:id', shoppingCart.getOne);

  // EVERYTHING BELOW THIS LINE IS ADMIN PROTECTED
  app.use(adminAuth);

  app.get('/admin_dashboard', admin.dashboard);

  app.get('/admin_product_category') // STILL NEED TO EDIT

  app.get('/admin_product_dashboard') // STILL NEED TO EDIT

  app.get('/admin_product') // STILL NEED TO EDIT


  function userAuth(req, res, next){
    if(req.session.user || req.session.admin){
      next();
    }else{
      res.redirect("/users/login")
    }
  }

  function adminAuth(req,res,next){
    if(req.session.admin){
      next();
    }else{
      res.redirect('/login');
    }
  }

  app.use(function(req, res){

      res.render('404');
    })
  }
