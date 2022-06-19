import PhysicalActivityModel from '../models/PhysicalActivity.js';


export const createPhysicalActivity = async (req, res) => {
    try {
        const newPhysicalActivity = new PhysicalActivityModel(req.body);

        await newPhysicalActivity.save();
        res.status(200).send(`Physical activity created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getAllPhysicalActivities = async (req, res) => {
    try {
        const physicalActivities = await PhysicalActivityModel.find();

        res.status(200).send(physicalActivities)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getPhysicalActivity = async (req, res) => {
    try {
        const physicalActivity = await PhysicalActivityModel.findById(req.params.id);

        res.status(200).send(physicalActivity)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updatePhysicalActivity = async (req, res) => {
    try {
        const physicalActivity = await PhysicalActivityModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await physicalActivity.save()
        res.status(200).send(physicalActivity)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deletePhysicalActivity = async (req, res) => {
    try {
        const physicalActivity = await PhysicalActivityModel.findById(req.params.id);

        PhysicalActivity.deleteOne(physicalActivity)
        res.status(200).send("PhysicalActivity deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}