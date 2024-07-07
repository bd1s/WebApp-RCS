// const { Utilisateur } = require('../models/utilisateur');
// const bcrypt = require('bcrypt');

// const createUser = async (req, res) => {
//   try {
//     const { email, mot_de_passe_hache, role, prenom, nom, tele } = req.body;

//     // Hachage du mot de passe
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(mot_de_passe_hache, saltRounds);

//     const newUser = await Utilisateur.create({
//       email,
//       mot_de_passe_hache: hashedPassword, // Utilisez le mot de passe haché
//       role,
//       prenom,
//       nom,
//       tele
//     });
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   createUser
// };
