


const Utilisateur = require('../models/utilisateur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Pour générer le token de réinitialisation
require('dotenv').config();
const { sendConfirmationEmail } = require('../nodemailer'); // Assurez-vous que ce chemin est correct




// const register = async (req, res) => {
//   try {
//     const { email, password, role, prenom, nom, tele } = req.body;

//     // Validate password length
//     if (password.length < 8) {
//       return res.status(400).json({ msg: 'Le mot de passe doit comporter au moins 8 caractères' });
//     }

//     // Hash the password before storing it in the database
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Debugging: log the hashed password
//     console.log('Hashed password (registration):', hashedPassword);

//     // Create new user
//     const newUser = await Utilisateur.create({
//       email,
//       mot_de_passe_hache: hashedPassword,
//       role,
//       prenom,
//       nom,
//       tele,
//     });

//     res.status(201).json({ msg: 'Utilisateur enregistré avec succès', user: newUser });
//   } catch (err) {
//     console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', err);
//     res.status(500).json({ msg: 'Erreur du serveur', error: err.message });
//   }
// };

const register = async (req, res) => {
  try {
    const { email, password, role, prenom, nom, tele } = req.body;

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({ msg: 'Le mot de passe doit comporter au moins 8 caractères' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate activation code
    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let activationCode = "";
    for (let i = 0; i < 25; i++) {
      activationCode += characters[Math.floor(Math.random() * characters.length)];
    }

    // Debugging: log the hashed password and activation code
    console.log('Hashed password (registration):', hashedPassword);
    console.log('Activation code:', activationCode);

    // Create new user
    const newUser = await Utilisateur.create({
      email,
      mot_de_passe_hache: hashedPassword,
      role,
      prenom,
      nom,
      tele,
      isActive: false,
      activationCode,
    });

   // Send confirmation email
   sendConfirmationEmail(email, activationCode);

    res.status(201).json({ msg: 'Utilisateur enregistré avec succès', user: newUser });
  } catch (err) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', err);
    res.status(500).json({ msg: 'Erreur du serveur', error: err.message });
  }
};




const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    // Vérifiez si l'utilisateur existe avec l'email donné
    const user = await Utilisateur.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ msg: 'Aucun utilisateur trouvé avec cet email' });
    }

    // Générez un token de réinitialisation de mot de passe
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Stockez le token et l'heure d'expiration dans la base de données pour cet utilisateur
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 heure d'expiration

    await user.save();

    // Envoyez un email à l'utilisateur avec le lien de réinitialisation du mot de passe (implémentation dépendante de votre service d'email)

    res.status(200).json({ msg: 'Un email avec les instructions de réinitialisation de mot de passe a été envoyé' });
  } catch (err) {
    console.error('Erreur lors de la demande de réinitialisation de mot de passe :', err);
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

    // Check if the user's account is active
    if (!user.isActive) {
      console.log('User account not activated');
      return res.status(401).json({ msg: 'Veuillez vérifier votre boîte email pour activer votre compte' });
    }

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
      process.env.JWT_SECRET,
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

// const verifyUser = async (req, res) => {
//   try {
//     const user = await Utilisateur.findOne({ where: { activationCode: req.params.activationcode } });
//     if (!user) {
//       return res.status(400).send({
//         message: "Code d'activation incorrect",
//       });
//     }

//     user.isActive = true;
//     await user.save();

//     res.send({
//       message: "Le compte a été activé avec succès",
//     });
//   } catch (err) {
//     res.status(500).send({
//       message: "Erreur du serveur",
//       error: err.message,
//     });
//   }
// };
const verifyUser = async (req, res) => {
  try {
    const user = await Utilisateur.findOne({ where: { activationCode: req.params.activationcode } });
    if (!user) {
      return res.status(400).send({
        message: "Code d'activation incorrect",
      });
    }

    user.isActive = true; // Sequelize devrait gérer la conversion en 1 pour la base de données
    await user.save();

    res.send({
      message: "Félicitations ! Votre compte a été activé avec succès.",
    });
  } catch (err) {
    res.status(500).send({
      message: "Erreur du serveur",
      error: err.message,
    });
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
  requestPasswordReset, 
  verifyUser
};
