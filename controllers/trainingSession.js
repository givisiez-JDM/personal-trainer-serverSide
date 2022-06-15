import TrainingModel from '../models/TrainingSession.js';

export const createTrainingSession = async (req, res) => {
    try {
        const training = req.body;
        const newTraining = new TrainingModel(training);
    
        await newTraining.save();
        res.status(200).send(`training session created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getAllTrainingSession = async (req, res) => {
    try {
        const training = await TrainingModel.find();

        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getTrainingSession = async (req, res) => {
    try {
        const training = await TrainingModel.find();

        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateTrainingSession = async (req, res) => {
    try {
        const training = await TrainingModel.find();

        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteTrainingSession = async (req, res) => {
    try {
        const training = await TrainingModel.find();

        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}