import UserModel from '../models/Users.js';

export const createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new UserModel(user);
    
        await newUser.save();
        res.status(200).send(`user created successfully`)   
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();

        res.status(200).send(users)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const { email } = req.body;
        const users = await UserModel.find({ "email": email });

        res.status(200).send(users)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const users = await UserModel.find();

        res.status(200).send(users)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const users = await UserModel.find();

        res.status(200).send(users)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}