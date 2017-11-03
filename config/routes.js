//Update the name of the controller below and rename the file.
const about = require("../controllers/about.js");
const contact = require("../controllers/contact.js");
const home = require("../controllers/home.js");
const product = require("../controllers/product.js");
const admin = require("../controllers/admin.js");
const customer = require("../controllers/customer.js");
const cart = require("../controllers/cart.js");

module.exports = function(app){
  app.use(cartCheck);
  
  app.get('/', home.index);

  app.get('/product', product.index);


  app.get('/products/cart/:id', product.addToCart);


  app.get('/product/:id', product.userGetOne);


  app.get('/about', about.getAll);

  app.get('/contact', contact.getAll);


  app.get('/register_login', customer.login);  // CUSTOMER LOGIN



  app.post('/customer/register', customer.register);  // CUSTOMER REGISTRATION

  app.post('/customer/login', customer.check);  // CUSTOMER CHECK




  app.get('/admin_login', admin.login);

  app.post('/admin_login', admin.check);

  app.get('/cart', cart.cartPage);

  app.get('/cart/:itemName', cart.addToCart);

  // EVERYTHING BELOW THIS LINE IS PROTECTED
  app.use(userAuth);

  // This will bring user to profile page
  app.use('/customer_profile', customer.profile);

  //This will edit customer profile
  app.use('/edit_customer_profile/:id', customer.edit);

  // This will log user out
  app.get('/user_logout', customer.logout);

  // app.get('customer/:id', customer.getOne); // CUSTOMER GET ONE AFTER LOGGED IN

  // EVERYTHING BELOW THIS LINE IS ADMIN PROTECTED
  app.use(adminAuth);

  // ADMIN DASHBOARD
  app.get('/admin_dashboard', admin.dashboard);

  app.get('/admin_logout', admin.logout);

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

  app.get('/admin_addProduct', product.addOne);

  app.post('/admin_addProduct', product.create);

  app.get('/editProduct/:id', product.edit);

  app.post('/editProduct/:id', product.update);

  app.get('/deleteProduct/:id', product.delete);

  // USER SESSION FUNCTION
  function userAuth(req, res, next){
    if(req.session.user || req.session.admin){
      next();
    }else{
      res.redirect("/");
    }
  }

  // ADMIN SESSION FUNCTION
  function adminAuth(req,res,next){
    if(req.session.admin){
      next();
    }else{
      res.redirect('/');
    }
  }
  function cartCheck(req, res, next){
    if(!req.session.cart){
      req.session.cart = [];
      req.session.save(()=>{
        next();
      })
    }else{
      next();
    }
  }


  app.use(function(req, res){

      res.render('404');
    })
  }
