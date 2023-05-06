const express = require('express');
const router = express.Router();

const forumController = require('../controllers/forumController');
router.get('/forum', (req, res) => {
  forumController.createComment(req, res);
});
module.exports = router;