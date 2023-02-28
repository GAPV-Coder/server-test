const express = require('express');

const router = express.Router();

const {envioMail} = require('../middlewares/nodemailerConfirmacionSignUp')

const {
    registerUser,
    loginUser,
    authenticateUser,
} = require('../controllers/auth.controller');

const {
    validateRegisterFields,
    validateLoginFields,
} = require('../validators/user.validator');

router.post('/register', validateRegisterFields, registerUser,envioMail);
router.post('/login', validateLoginFields, loginUser);
router.use(authenticateUser);

module.exports = router;
