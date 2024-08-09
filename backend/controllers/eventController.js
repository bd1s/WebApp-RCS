const { Evenement } = require('../models');

module.exports = {
  getAllEvents: async (req, res) => {
    try {
      const events = await Evenement.findAll();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createEvent: async (req, res) => {
    try {
      const { titre, description, date, heure_debut, heure_fin } = req.body;
      const event = await Evenement.create({ titre, description, date, heure_debut, heure_fin });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEventById: async (req, res) => {
    try {
      const { id } = req.params;
      const event = await Evenement.findByPk(id);
      if (!event) {
        return res.status(404).json({ error: 'Événement non trouvé' });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEvent: async (req, res) => {
    try {
      const { id } = req.params;
      const { titre, description, date, heure_debut, heure_fin } = req.body;

      const event = await Evenement.findByPk(id);
      if (!event) {
        return res.status(404).json({ error: 'Événement non trouvé' });
      }

      await event.update({ titre, description, date, heure_debut, heure_fin });
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEvent: async (req, res) => {
    try {
      const { id } = req.params;
      const event = await Evenement.findByPk(id);
      if (!event) {
        return res.status(404).json({ error: 'Événement non trouvé' });
      }

      await event.destroy();
      res.json({ message: 'Événement supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
