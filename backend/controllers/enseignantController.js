const Enseignant = require('../models/Enseignant');

exports.getProfile = async (req, res) => {
  try {
    const profile = await Enseignant.findById(req.user.id);
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStudents = async (req, res) => {
  // Logique pour obtenir la liste des doctorants encadrés
};

exports.getCalendar = async (req, res) => {
  // Logique pour obtenir le calendrier des soutenances et des réunions
};

exports.sendInfo = async (req, res) => {
  // Logique pour diffuser des informations
};

exports.giveFeedback = async (req, res) => {
  // Logique pour donner des commentaires et des retours
};
