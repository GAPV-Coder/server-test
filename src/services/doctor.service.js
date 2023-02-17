const { Doctor } = require('../models/doctor.model');

const getDoctorById = async (id) => {
    const doctor = await Doctor.findOne({ where: { id } });
    return doctor;
};

const getDoctors = async () => {
    try {
        const doctors = await Doctor.findAll({
            attributes: { exclude: ['password'] },
        });
        return doctors;
    } catch (error) {
        throw new Error(error.message);
    }
};

const createDoctor = async (newDoctor) => {
    try {
        const doctor = await Doctor.create(newDoctor);
        return doctor;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateDoctor = async (id, updatedDoctor) => {
    try {
        const doctor = await Doctor.findOne({ where: { id } });
        if (!doctor) {
            throw new Error('Doctor not found');
        }
        await Doctor.update(updatedDoctor, { where: { id } });
        const updated = await Doctor.findOne({ where: { id } });
        return updated;
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteDoctor = async (id) => {
    try {
        const doctor = await Doctor.findOne({ where: { id } });
        if (!doctor) {
            throw new Error('Doctor not found');
        }
        await Doctor.destroy({ where: { id } });
        return { message: 'Doctor deleted successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getDoctorById,
    getDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctor,
};
