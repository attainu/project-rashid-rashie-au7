var express = require('express');
var router = express.Router();
const userController  = require('../controllers/user.controller');
const {userSignupValidator} = require('../validators/user.validation')
const {token} = require('../controllers/auth.controller')


router.param("token",token)

/* POST Register  */
router.post('/register',userSignupValidator,userController.registerUser);

/* POST LOGIN */
router.post('/login', userController.loginUser);

/* GET Logout */
router.get('/logout',userController.logout);

/* GET Category */
router.get('/categories',userController.listCatgy);

router.post('/forgotpassword',userController.forgotpwd);

router.post('/resetpwd/:token',userController.frgtpwd)

module.exports = router;