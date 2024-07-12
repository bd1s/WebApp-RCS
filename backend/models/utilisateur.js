// // const { DataTypes } = require('sequelize');
// // const sequelize = require('../config/database');
// // const bcrypt = require('bcrypt');

// // const Utilisateur = sequelize.define('Utilisateur', {
// //   id_utilisateur: {
// //     type: DataTypes.INTEGER,
// //     autoIncrement: true,
// //     primaryKey: true,
// //     allowNull: false,
// //   },
// //   email: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //     unique: true,
// //   },
// //   mot_de_passe_hache: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   role: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   prenom: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   nom: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   tele: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
  
// // }
// // );

// // module.exports = Utilisateur;



// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const bcrypt = require('bcrypt');

// const Utilisateur = sequelize.define('Utilisateur', {
//   id_utilisateur: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   mot_de_passe_hache: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   role: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   prenom: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   nom: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   tele: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   isActive: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
//   activationCode: {
//     type: DataTypes.STRING,
//   },
// });

// module.exports = Utilisateur;

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const bcrypt = require('bcrypt');

// const Utilisateur = sequelize.define('Utilisateur', {
//   id_utilisateur: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   mot_de_passe_hache: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   role: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   prenom: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   nom: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   tele: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   isActive: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
//   activationCode: {
//     type: DataTypes.STRING,
//   },
//   resetPasswordToken: {
//     type: DataTypes.STRING,
//   },
//   resetPasswordExpires: {
//     type: DataTypes.DATE,
//   },
// });

// module.exports = Utilisateur;


// models/utilisateur.js
'use strict';
module.exports = (sequelize, DataTypes) => {
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
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    activationCode: {
      type: DataTypes.STRING,
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
    },
  }, {});
  
  Utilisateur.associate = function(models) {
    Utilisateur.hasOne(models.Doctorant, { foreignKey: 'id_utilisateur' });
    // Ajoutez ici d'autres associations si nécessaire
  };

  return Utilisateur;
};

