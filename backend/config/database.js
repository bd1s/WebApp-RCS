const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rcs_db', 'root', 'untm', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
