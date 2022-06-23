import PhysicalEvaluationModel from '../models/PhysicalEvaluation.js';

export const createPhysicalEvaluation = async (req, res) => {
    try {
        const newPhysicalEvaluation = new PhysicalEvaluationModel(req.body);

        await newPhysicalEvaluation.save();
        res.status(200).send(`Physical Evaluation created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getPhysicalEvaluationsByClientId = async (req, res) => {
    try {
        const clientId = req.params.id
        const physicalEvaluations = await PhysicalEvaluationModel.find({clientId: clientId});

        res.status(200).send(physicalEvaluations)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getAllPhysicalEvaluations = async (req, res) => {
    try {
        const physicalEvaluations = await PhysicalEvaluationModel.find();

        res.status(200).send(physicalEvaluations)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getPhysicalEvaluation = async (req, res) => {
    try {
        const physicalEvaluation = await PhysicalEvaluationModel.findById(req.params.id);

        res.status(200).send(physicalEvaluation)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updatePhysicalEvaluation = async (req, res) => {
    try {
        const physicalEvaluation = await PhysicalEvaluationModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await physicalEvaluation.save()
        res.status(200).send(physicalEvaluation)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deletePhysicalEvaluation = async (req, res) => {
    try {
        const physicalEvaluation = await PhysicalEvaluationModel.findById(req.params.id);

        physicalEvaluation.deleteOne(physicalEvaluation)
        res.status(200).send("Physical Evaluation deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}