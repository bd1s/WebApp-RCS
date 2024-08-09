// src/controllers/userController.js

const { Utilisateur } = require('../models');

const getUserRole = async (req, res) => {
  try {
    // L'identifiant de l'utilisateur est dans req.user à partir du middleware verifyToken
    const userId = req.user.userId;

    // Trouver l'utilisateur par ID
    const user = await Utilisateur.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Retourner le rôle de l'utilisateur
    res.status(200).json({ role: user.role });
  } catch (err) {
    console.error('Erreur lors de la récupération du rôle de l\'utilisateur :', err);
    res.status(500).json({ message: 'Erreur du serveur', error: err.message });
  }
};

module.exports = {
  getUserRole,
};
