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
        const userId = req.params.id;
        const user = await UserModel.findById(userId);

        res.status(200).send(user)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = req.body;
        const users = await UserModel.find({ "email": email });

        await users.updateOne(users, updatedUser)
        res.status(200).send(users)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.body;
        const user = await UserModel.findById(userId);

        users.deleteOne(user)
        res.status(200).send("user deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}