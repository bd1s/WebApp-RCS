// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('rcs_db', 'root', 'untm', {
//   host: 'localhost',
//   dialect: 'mysql', 
// });

// module.exports = sequelize;


const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  timezone: process.env.DB_TIMEZONE || '+00:00',
});

module.exports = sequelize;
