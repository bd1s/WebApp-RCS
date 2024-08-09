const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rcs_db", "root", "WSL.phpmyadminpass", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
