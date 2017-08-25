var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js")

var Burger = sequelize.define("burger",{
  burger_name:{
    type:Sequelize.STRING
  },
  devoured:{
    type:false
  }
});

burgers.sync();
module.exports = burger;

