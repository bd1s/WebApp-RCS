

const nodemailer = require("nodemailer");
require("dotenv").config();

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.USER, // Utiliser la variable USER définie dans .env
    pass: process.env.APP_PASSWORD,
  },
});

// Function to send confirmation email
module.exports.sendConfirmationEmail = (email, activationCode) => {
  transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Confirmer votre compte",
    html: `
      <h1>Email de Confirmation</h1>
      <h2>Bonjour</h2>
      <p>Pour activer votre compte, veuillez cliquer sur ce lien</p>
      <a href="http://localhost:3000/confirm/${activationCode}">Cliquer ici !</a>
    `,
  })
  .then(() => console.log('Email de confirmation envoyé avec succès'))
  .catch((err) => console.log('Erreur lors de l\'envoi de l\'email de confirmation :', err));
};



// Function to send password reset email
module.exports.sendPasswordResetEmail = (email, token) => {
  transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Réinitialisation de votre mot de passe",
    html: `
      <h1>Réinitialisation de votre mot de passe</h1>
      <h2>Bonjour</h2>
      <p>Pour réinitialiser votre mot de passe, veuillez cliquer sur ce lien</p>
      <a href="http://localhost:3000/reset-password/${token }">Réinitialiser mon mot de passe</a>
    `,
  })
  .then(() => console.log('Email de réinitialisation de mot de passe envoyé avec succès'))
  .catch((err) => console.log('Erreur lors de l\'envoi de l\'email de réinitialisation de mot de passe :', err));
};