const router = require('express').Router();

const {Login,Register} = require('../controllers/GetControllers');
const ErrMid = require('../middlewares/err/index');

router.get("/login",Login);
router.get('/register',Register);

router.use(ErrMid);

module.exports = router;