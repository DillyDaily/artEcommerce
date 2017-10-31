//Update the name of the controller below and rename the file.
const about = require("../controllers/about.js");
const contact = require("../controllers/contact.js");
const home = require("../controllers/home.js");
const product = require("../controllers/product.js");
const register_login = require("../controllers/register_login.js");
const shoppingCart = require("../controllers/shoppingCart.js");
const admin = require("../controllers/admin.js")


module.exports = function(app){

  app.get('/', home.index);

  app.get('/product', product.index);

  app.get('/about', about.getAll);

  app.get('/contact', contact.getAll);

  app.get('/register_login', register_login.login);  // CUSTOMER LOGIN

  app.post('/register_login', register_login.check);  // CHECK CUSTOMER

  app.post('/register_login/register', register_login.register);  // REGISTER NEW CUSTOMER

  app.get('/admin_login', admin.login);

  app.post('/admin_login', admin.check);

  // EVERYTHING BELOW THIS LINE IS PROTECTED
  app.use(userAuth);

  app.get('/contact/:id', contact.getOne);

  app.get('/deleteContact/:id', contact.delete);

  app.get('/cart/:itemName', items.addToCart);

  // EVERYTHING BELOW THIS LINE IS ADMIN PROTECTED
  app.use(adminAuth);

  // ADMIN DASHBOARD
  app.get('/admin_dashboard', admin.dashboard);

  // CATEGORIES
  app.get('/admin_product_category', admin.categoryGetAll);

  app.get('/admin_product_category/:id', admin.categoryGetOne);

  app.post('/admin_product_category', admin.create);

  app.get('/editAdmin_product_category/:id', admin.categoryEdit);

  app.post('/editAdmin_product_category/:id', admin.categoryUpdate);

  app.get('/deleteAdmin_product_category/:id', admin.categoryDelete);

  // PRODUCT DASHBOARD
  app.get('/admin_product_dashboard', product.getAll);

  // PRODUCTS
  app.get('/admin_product/:id', product.getOne);

  app.get('/admin_product/add', product.addOne);

  app.post('/admin_product/add', product.create);

  app.get('/editProduct/:id', product.edit);

  app.post('/editProduct/:id', product.update);

  app.get('/deleteProduct/:id', product.delete);

  // USER SESSION FUNCTION
  function userAuth(req, res, next){
    if(req.session.user || req.session.admin){
      next();
    }else{
      res.redirect("/users/login")
    }
  }

  // ADMIN SESSION FUNCTION
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
