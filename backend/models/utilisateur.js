const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Utilisateur = sequelize.define('Utilisateur', {
  id_utilisateur: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mot_de_passe_hache: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tele: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
}, {
  hooks: {
    beforeCreate: async (user) => {
      if (user.mot_de_passe_hache) {
        const salt = await bcrypt.genSalt(10);
        user.mot_de_passe_hache = await bcrypt.hash(user.mot_de_passe_hache, salt);
      }
    },
  },
});

module.exports = Utilisateur;
