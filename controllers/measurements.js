import MeasurementModel from '../models/Measurements.js';

export const createMeasurement = async (req, res) => {
    try {
        const newMeasurement = new MeasurementModel(req.body);

        await newMeasurement.save();
        res.status(200).send(`Measurement created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getMeasurement = async (req, res) => {
    try {
        const measurement = await MeasurementModel.findById(req.params.id);

        res.status(200).send(measurement)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateMeasurement = async (req, res) => {
    try {
        const measurement = await MeasurementModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await measurement.save()
        res.status(200).send(measurement)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteMeasurement = async (req, res) => {
    try {
        const measurement = await MeasurementModel.findById(req.params.id);

        measurement.deleteOne(measurement)
        res.status(200).send("Measurement deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}