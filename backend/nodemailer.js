

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
