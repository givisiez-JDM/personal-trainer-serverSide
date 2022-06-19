import UserModel from '../models/Users.js';

export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);

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
        const user = await UserModel.findById(req.params.id);

        res.status(200).send(user)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await user.save()
        res.status(200).send(user)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);

        user.deleteOne(user)
        res.status(200).send("user deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}