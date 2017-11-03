const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  cartPage: function(req, res) {
    knex('product')
      .then((pdtResult) => {
        let userLogged = req.session.user ? true:false;
        res.render("cart", {cartObj: req.session.cart, pdt: pdtResult, isLogged: userLogged});
      });

  },

  addToCart: function(req, res) {
    req.session.cart.push(req.params.itemName);
    res.redirect('/cart');
  },
  checkout: function(req, res){
    delete req.session.cart;

    res.redirect("/")
  }
}
