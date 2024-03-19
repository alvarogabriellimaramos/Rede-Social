const router = require('express').Router();


// controllers
const {Login,Register,Home,RedirectLogin} = require('../controllers/GetControllers');
const {SendToken,CreateUser} = require('../controllers/post/Register');
const LoginUser = require('../controllers/post/Login');
const JwtHome = require("../controllers/jwtHome");
const ReturnUser = require("../controllers/returnUsername");

//middlewares
const ErrMid = require('../middlewares/err');
const JWT = require("../middlewares/jwt/index");
const VerifyConnect = require("../middlewares/verifyConnect/index");


router.use('/jwt',JWT);


// rotas get

router.get("/login",Login);
router.get('/register',Register);
router.get('/jwt/create',CreateUser);
router.get("/jwt/logout",RedirectLogin);
router.get('/home',JwtHome,Home);


// rotas post
router.post('/sendEmail',SendToken);
router.post('/login',LoginUser.Login);
router.post("/user",ReturnUser);

// middleware erro,caso o usuario acesse uma rota que não existe (404);
router.use(ErrMid);

module.exports = router;