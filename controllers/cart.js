const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  cartPage: function(req, res) {
    if(!req.session.cart) {
      req.session.cart = [];
    }
    res.render("cart", {cartObj: res.session.cart});
  },

  addToCart: function(req, res) {
    req.session.cart.push(req.params.itemName);
    res.redirect('/cart');
  }
}
