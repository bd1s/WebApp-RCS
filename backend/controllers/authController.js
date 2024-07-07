const Utilisateur = require('../models/utilisateur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { email, password, role, prenom, nom, tele } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Debugging: log the hashed password
    console.log('Hashed password (registration):', hashedPassword);

    // Create new user
    const newUser = await Utilisateur.create({
      email,
      mot_de_passe_hache: hashedPassword,
      role,
      prenom,
      nom,
      tele,
    });

    res.status(201).json({ msg: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ msg: 'Erreur du serveur', error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Login attempt:', { email, password });

    // Find user by email using Sequelize
    const user = await Utilisateur.findOne({ where: { email } });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ msg: 'Email ou mot de passe incorrect' });
    }

    console.log('User found:', user);

    // Display passwords for debugging
    console.log('Password entered:', password);
    console.log('Hashed password in DB:', user.mot_de_passe_hache);

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.mot_de_passe_hache);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(401).json({ msg: 'Email ou mot de passe incorrect' });
    }

    console.log('Password matches');

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email, userId: user.id_utilisateur },
      'secret', // Utilisez une clé secrète de vos variables de configuration/environnement
      { expiresIn: '1h' }
    );

    res.status(200).json({
      msg: 'Authentication successful!',
      token: token,
      user_id: user.id_utilisateur,
    });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ msg: 'Erreur du serveur', error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Utilisateur.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
};


// const mysql = require('mysql');
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer'); 

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'untm',
//   database: 'rcs_db',
// });

// // Connexion à la base de données
// connection.connect((err) => {
//   if (err) {
//     console.error('Erreur de connexion à la base de données:', err);
//     return;
//   }
//   console.log('Connecté à la base de données MySQL.');

//   // Exemple de requête SQL pour récupérer un utilisateur par email
//   const email = 'essalihi@gmail.com';
//   connection.query('SELECT * FROM Utilisateurs WHERE email = ?', [email], (err, results) => {
//     if (err) {
//       console.error('Erreur lors de la recherche de l\'utilisateur:', err);
//       connection.end();
//       return;
//     }

//     if (results.length === 0) {
//       console.log('Aucun utilisateur trouvé avec cet email.');
//       connection.end();
//       return;
//     }

//     const user = results[0];
//     const hashedPassword = user.mot_de_passe_hache;

//     // Comparaison du mot de passe
//     bcrypt.compare('reda1', hashedPassword, (err, isMatch) => {
//       if (err) {
//         console.error('Erreur lors de la comparaison du mot de passe:', err);
//         connection.end();
//         return;
//       }

//       if (isMatch) {
//         console.log('Les mots de passe correspondent.');
//       } else {
//         console.log('Les mots de passe ne correspondent pas.');
//       }

//       // Fermeture de la connexion à la base de données
//       connection.end();
//     });
//   });
// });
