const express = require('express');
const router = express.Router();
const { m } = require('../controllers/controllerExample');
router.get('/example', m);

module.exports = router;