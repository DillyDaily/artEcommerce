const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  cartPage: function(req, res) {
    knex('product')
      .then((pdtResult) => {
        res.render("cart", {cartObj: req.session.cart, pdt: pdtResult});
      });

  },

  addToCart: function(req, res) {
    req.session.cart.push(req.params.itemName);
    res.redirect('/cart');
  }
}
