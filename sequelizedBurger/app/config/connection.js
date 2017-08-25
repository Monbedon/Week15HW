// dependencies
var Sequelize =require("sequelize");

// create connection 
var sequelize = new Sequelize("burgers_db","root","password",{
	host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
