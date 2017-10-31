const knex = require("../db/knex.js");

module.exports = {
  // This will bring to admin dashboard page

  dashboard: function(req, res){
    render('admin_dashboard');
  }



}
