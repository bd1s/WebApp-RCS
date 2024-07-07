
// const express = require('express');
// const router = express.Router();



// module.exports = router;

const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();
router.get('/test', (req, res) => {
    res.send('Test route is working');
  });
router.post("/", usersController.save);

module.exports = router;

