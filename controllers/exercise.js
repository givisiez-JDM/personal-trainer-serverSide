import ExerciseModel from '../models/Exercise.js';


export const createExercise = async (req, res) => {
    try {
        const newExercise = new ExerciseModel(req.body);

        await newExercise.save();
        res.status(200).send(`Exercise created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getAllExercises = async (req, res) => {
    try {
        const exercises = await ExerciseModel.find();

        res.status(200).send(exercises)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getExercise = async (req, res) => {
    try {
        const exercise = await ExerciseModel.findById(req.params.id);

        res.status(200).send(exercise)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateExercise = async (req, res) => {
    try {
        const Exercise = await ExerciseModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await Exercise.save()
        res.status(200).send(Exercise)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteExercise = async (req, res) => {
    try {
        const Exercise = await ExerciseModel.findById(req.params.id);

        Exercise.deleteOne(Exercise)
        res.status(200).send("Exercise deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}