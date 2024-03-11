const router = require('express').Router();
const {SendToken} = require('../controllers/post/postControllers');

router.post('/sendEmail',SendToken);

module.exports = router;