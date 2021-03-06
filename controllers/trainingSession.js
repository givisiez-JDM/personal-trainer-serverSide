import TrainingModel from '../models/TrainingSession.js';

export const createTrainingSession = async (req, res) => {
    try {
        const newTrainingSession = new TrainingModel(req.body);

        await newTrainingSession.save();
        res.status(200).send(`Training session created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getAllTrainingSessions = async (req, res) => {
    try {
        const training = await TrainingModel.find();

        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getTrainingSessionsByPersonalId = async (req, res) => {
    try {
        const trainerId = req.params.id
        const training = await TrainingModel.find({personalTrainerId: trainerId});

        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getTrainingSessionsByClientId = async (req, res) => {
    try {
        const clientId = req.params.id
        const training = await TrainingModel.find({clientId: clientId});

        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getTrainingSession = async (req, res) => {
    try {
        const training = await TrainingModel.findById(req.params.id);

        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateTrainingSession = async (req, res) => {
    try {
        const training = await TrainingModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await training.save()
        res.status(200).send(training)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteTrainingSession = async (req, res) => {
    try {
        const training = await TrainingModel.findById(req.params.id);

        training.deleteOne(training)
        res.status(200).send("Training session deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}