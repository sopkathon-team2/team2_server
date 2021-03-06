var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/main', require('./main/index'));
router.use('/party', require('./party/index'));
router.use('/auth', require('./auth/index'));
router.use('/like', require('./like.js'));

module.exports = router;
