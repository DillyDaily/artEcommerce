//Update the name of the controller below and rename the file.
const about = require("../controllers/about.js");
const contact = require("../controllers/contact.js");
const home = require("../controllers/home.js");
const product = require("../controllers/product.js");
const register_login = require("../controllers/register_login.js");
const shoppingCart = require("../controllers/shoppingCart.js");
module.exports = function(app){

  app.get('/', customer.index);

  app.use(function(req, res){
    
      res.render('404');
    })
  }
