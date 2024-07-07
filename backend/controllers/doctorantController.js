// const Doctorant = require('../models/Doctorant');

// exports.getProfile = async (req, res) => {
//   try {
//     const profile = await Doctorant.findById(req.user.id);
//     res.json(profile);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     const profile = await Doctorant.findByIdAndUpdate(req.user.id, req.body, { new: true });
//     res.json(profile);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// exports.requestChange = async (req, res) => {
//   // Logique pour les demandes de changement
// };

// exports.requestAttestation = async (req, res) => {
//   // Logique pour les demandes d'attestation
// };

// exports.getCalendar = async (req, res) => {
//   // Logique pour obtenir le calendrier des formations et des événements
// };

// exports.uploadRequest = async (req, res) => {
//   // Logique pour télécharger les demandes signées
// };
