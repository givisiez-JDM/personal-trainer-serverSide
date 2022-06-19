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

        user.deleteOne(training)
        res.status(200).send("Training session deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}