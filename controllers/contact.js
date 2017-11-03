const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  getAll: function(req, res) {
    let userLogged = req.session.user ? true:false;
    res.render("contact", {isLogged: userLogged});
  },

  getOne: function(req, res) {
    res.send("Hello");
  },

  delete: function(req, res) {
    res.send("Delete Me")
  },

}
