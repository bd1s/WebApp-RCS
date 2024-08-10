const { File } = require("../models");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

require("dotenv").config();

const spacesEndpoint = new aws.Endpoint(process.env.DO_SPACES_ENDPOINT);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.DO_SPACES_BUCKET,
    acl: "public-read",
    key: (req, file, cb) => {
      cb(null, `${Date.now().toString()}-${file.originalname}`);
    },
  }),
});

module.exports = {
  uploadFile: upload.single("file"),
  createFile: async (req, res) => {
    try {
      const { title, description, type } = req.body;
      const file = await File.create({
        title,
        description,
        type,
        path: req.file.location,
      });
      res.status(201).json(file);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllFiles: async (req, res) => {
    try {
      const files = await File.findAll();
      res.json(files);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getFileById: async (req, res) => {
    try {
      const { id } = req.params;
      const file = await File.findByPk(id);
      if (!file) {
        return res.status(404).json({ error: "Fichier non trouvé" });
      }
      res.json(file);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateFile: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, type } = req.body;

      const file = await File.findByPk(id);
      if (!file) {
        return res.status(404).json({ error: "Fichier non trouvé" });
      }

      await file.update({ title, description, type });
      res.json(file);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteFile: async (req, res) => {
    try {
      const { id } = req.params;
      const file = await File.findByPk(id);
      if (!file) {
        return res.status(404).json({ error: "Fichier non trouvé" });
      }

      await file.destroy();
      res.json({ message: "Fichier supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
