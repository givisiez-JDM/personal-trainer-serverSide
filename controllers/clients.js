import ClientModel from '../models/Clients.js';

export const createClient = async (req, res) => {
    try {
        const newClient = new ClientModel(req.body);

        await newClient.save();
        res.status(200).send(`Client created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getClientsByTrainerId = async (req, res) => {
    try {
        const trainerId = req.params.id
        const clients = await ClientModel.find({personalTrainerId: trainerId});

        res.status(200).send(clients)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getAllClients = async (req, res) => {
    try {
        const clients = await ClientModel.find();

        res.status(200).send(clients)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getClient = async (req, res) => {
    try {
        const client = await ClientModel.findById(req.params.id);

        res.status(200).send(client)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateClient = async (req, res) => {
    try {
        const client = await ClientModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await client.save()
        res.status(200).send(client)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteClient = async (req, res) => {
    try {
        const client = await ClientModel.findById(req.params.id);

        client.deleteOne(client)
        res.status(200).send("Client deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}