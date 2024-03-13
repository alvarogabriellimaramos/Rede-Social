const router = require('express').Router();

// controllers
const {Login,Register} = require('../controllers/GetControllers');
const {SendToken,CreateUser} = require('../controllers/post/Register');

//middlewares
const ErrMid = require('../middlewares/err/index');
const JWT = require("../middlewares/jwt/index");

router.use('/jwt',JWT);
// rotas get
router.get("/login",Login);
router.get('/register',Register);
router.get('/jwt/create',CreateUser);

// rotas post
router.post('/sendEmail',SendToken);

// middleware erro,caso o usuario acesse uma rota que não existe (404);
router.use(ErrMid);

module.exports = router;