const express = require('express');

const router = express.Router();

const {
    registerDoctor,
    loginDoctor,
    authenticateDoctor,
} = require('../controllers/doctor.controller');

const {
    validateRegisterFields,
    validateLoginFields,
} = require('../validators/doctor.validator');

router.post('/register', validateRegisterFields, registerDoctor);
router.post('/login', validateLoginFields, loginDoctor);
router.use(authenticateDoctor);

module.exports = { DoctorRouter: router };
