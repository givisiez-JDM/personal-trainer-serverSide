import ClientModel from '../models/Clients.js';

export const createClient = async (req, res) => {
    try {
        const client = req.body;
        const newClient = new ClientModel(client);
    
        await newClient.save();
        res.status(200).send(`client created successfully`)   
    } catch (err) {
        res.status(409).send({ message: err.message });
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
        const clients = await ClientModel.find();

        res.status(200).send(clients)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateClient = async (req, res) => {
    try {
        const clients = await ClientModel.find();

        res.status(200).send(clients)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteClient = async (req, res) => {
    try {
        const clients = await ClientModel.find();

        res.status(200).send(clients)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}