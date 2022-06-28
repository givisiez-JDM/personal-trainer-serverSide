import FatDataModel from '../models/FatData.js';

export const createFatData = async (req, res) => {
    try {
        const newFatData = new FatDataModel(req.body);

        await newFatData.save();
        res.status(200).send(`FatData created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getFatData = async (req, res) => {
    try {
        const fatData = await FatDataModel.findById(req.params.id);

        res.status(200).send(fatData)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateFatData = async (req, res) => {
    try {
        const fatData = await FatDataModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await fatData.save()
        res.status(200).send(fatData)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteFatData = async (req, res) => {
    try {
        const fatData = await FatDataModel.findById(req.params.id);

        fatData.deleteOne(fatData)
        res.status(200).send("FatData deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}