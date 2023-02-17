const express = require('express');

const router = express.Router();

const { isAuth } = require('../middlewares/isAuth');

const {
    createDoc,
    getAllDoctors,
    getDoctor,
    updateDoc,
    deleteDoc,
} = require('../controllers/doctor.controller');

router.post('/doctors', isAuth, createDoc);

router.get('/doctors', isAuth, getDoctor);

router.get('/doctors/:id', isAuth, getAllDoctors);

router.put('/doctors/:id', isAuth, updateDoc);

router.delete('/doctors/:id', isAuth, deleteDoc);

module.exports = router;
