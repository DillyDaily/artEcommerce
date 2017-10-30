//Update the name of the controller below and rename the file.
const admin = require("../controllers/admin.js");
const customer = require("../controllers/customer.js");
module.exports = function(app){

  app.get('/', customer.index);

  app.use(function(req, res){
    
      res.render('404');
    })
  }
