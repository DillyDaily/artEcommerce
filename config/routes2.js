//Update the name of the controller below and rename the file.
const about = require("../controllers/about.js");
const contact = require("../controllers/contact.js");
const home = require("../controllers/home.js");
const product = require("../controllers/product.js");
const register_login = require("../controllers/register_login.js");
const shoppingCart = require("../controllers/shoppingCart.js");

const admin = require("../controllers/admin.js");
//======================== need to add admin variable


module.exports = function(app){

    app.get('/', home.index);
    //app.get('/christapatrice/, )
  
    app.get('/products', product.getAll);
  
    app.get('/about', about.getAll);
  
    app.get('/contact', contact.getAll);
  
    app.get('/register_login', register_login.login);  // CUSTOMER LOGIN
  
    app.post('/register_login', register_login.check);  // CHECK CUSTOMER
  
    app.post('/register_login', register_login.register);  // REGISTER NEW CUSTOMER
    //========================== 2 calls to same app.post route
    //========================== app.post('/register_login/register', register_login.register);


    app.get('/admin_login', admin.login);
  
    app.get('/admin_login', admin.check);
    //========================= 2 calls to same app.get route
    //========================= app.post('/admin_login', admin.check);
  

    // EVERYTHING BELOW THIS LINE IS PROTECTED
    app.use(userAuth);
  
    app.get('/contact/:id', contact.getOne);
  
    app.get('/contact/:id', contact.delete);
    //========================= 2 calls to same app.get route
    //========================= app.get('/deleteContact/:id', contact.delete);
  

    app.get('/shoppingCart/:id', shoppingCart.getOne);
  
    // EVERYTHING BELOW THIS LINE IS ADMIN PROTECTED
    app.use(adminAuth);
  
    // ADMIN DASHBOARD
    app.get('/admin_dashboard', admin.dashboard);
  
    // CATEGORIES
    app.get('/admin_product_category', admin.categoryGetAll);
  
    app.get('/admin_product_category/:id', admin.categoryGetOne);

    //=========================== adding a CREATE route
    //=========================== app.post('/admin_product_category', admin.create); 
    
  
    app.post('/admin_product_category/:id', admin.categoryEdit);
    //=========================== EDIT is a get request
    //=========================== app.get('/editAdmin_product_category/:id', admin.categoryEdit);

    //=========================== need an UPDATE route
    //=========================== app.post('/editAdmin_product_category/:id', admin.categoryUpdate);)
  

    app.post('/admin_product_category/:id', admin.categoryDelete);
    //=========================== DELETE is a get request
    //=========================== app.get('/deleteCategory/:id, admin.categoryDelete');
  
    // PRODUCT DASHBOARD
    app.get('/admin_product_dashboard', product.getAll);
  
    // PRODUCTS
    app.get('/admin_product/:id', product.getOne);

    //============================ need to CREATE products
    //============================ app.get('/admin_product/add', product.addOne);
    //============================ app.post('/admin_product/add', product.create);

  
    app.post('/admin_product/:id', product.edit);
    //============================ EDIT is a get request 
    //============================ app.get('/editProduct/:id', product.edit);


    //============================ need an UPDATE route
    //============================ app.post('/editProduct/:id', product.update);

  
    app.post('/admin_product/:id', product.delete);
    //============================ delete is a get request
    //============================ app.get('/deleteProduct/:id')

  
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