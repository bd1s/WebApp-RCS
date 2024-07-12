// middleware/verifyToken.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Authorization Header:', authHeader); // Log de l'en-tête Authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Accès refusé. Token JWT manquant.' });
  }

  const token = authHeader.replace('Bearer ', '');
  console.log('Token:', token); // Log du token

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé. Token JWT manquant.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded); // Log du token décodé
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token JWT invalide.' });
  }
};

module.exports = verifyToken;
