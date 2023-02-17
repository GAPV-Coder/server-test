const { success, serverError, error } = require('../helpers/responses');

const {
    getDoctorById,
    getDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctor,
} = require('../services/doctor.service');

const getDoctor = async (req, res) => {
    try {
        const { id } = req.params;

        const doctor = await getDoctorById(id);

        if (!doctor) {
            return error({
                res,
                message: 'Doctor not found',
            });
        }

        return success({
            res,
            message: 'Doctor retrieved successfully',
            data: { doctor },
        });
    } catch (err) {
        return serverError({
            res,
            message: err.message,
        });
    }
};

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await getDoctors();
        return success({
            res,
            data: doctors,
            message: 'Doctors retrieved successfully',
        });
    } catch (err) {
        return serverError({ res, message: error.message });
    }
};

const createDoc = async (req, res) => {
    try {
        const newDoctor = await createDoctor(req.body);
        return success({
            res,
            data: newDoctor,
            message: 'Doctor created successfully',
            statusCode: 201,
        });
    } catch (err) {
        return serverError({ res, message: error.message });
    }
};

const updateDoc = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDoctor = await updateDoctor(id, req.body);
        return success({
            res,
            data: updatedDoctor,
            message: 'Doctor updated successfully',
        });
    } catch (err) {
        return serverError({ res, message: error.message });
    }
};

const deleteDoc = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteDoctor(id);
        return success({
            res,
            message: 'Doctor deleted successfully',
        });
    } catch (err) {
        return serverError({ res, message: error.message });
    }
};

module.exports = {
    getDoctor,
    getAllDoctors,
    createDoc,
    updateDoc,
    deleteDoc,
};
