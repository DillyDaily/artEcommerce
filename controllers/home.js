const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('product')
      .then((result)=>{

        res.render("index", {product: result});
      })
  }

}
