const Admin = require('../models/Admin');

exports.getDashboard = async (req, res) => {
  try {
    const dashboardData = await Admin.getDashboardData();
    res.json(dashboardData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new Admin(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  // Logique pour suivre l'avancement des projets et des thèses
};

exports.sendNotification = async (req, res) => {
  // Logique pour envoyer des notifications
};

exports.getReports = async (req, res) => {
  // Logique pour générer des rapports et des statistiques
};
