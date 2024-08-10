const express = require("express");
const router = express.Router();
const filesController = require("../controllers/filesController");

router.get("/files", filesController.getAllFiles);
router.post("/files", filesController.createFile);
router.get("/files/:id", filesController.getFileById);
router.put("/files/:id", filesController.updateFile);
router.delete("/files/:id", filesController.deleteFile);
