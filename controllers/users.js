import UserModel from '../models/Users.js';
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
    try {
        const data = req.body
        const hashedPW = await bcrypt.hash(data.password, 10)
        const user = { ...data, password: hashedPW }
        const checkEmail = await UserModel.exists({ email: data.email })

        if (!checkEmail) {
            const newUser = new UserModel(user);
            await newUser.save();
            res.status(200).send(`user created successfully`)
        } else {
            res.status(409).send(`E-mail cadastrado, tente novamente.`)
        }
    } catch (err) {
        res.status(400).send({ message: err.message });
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

        const reqData = req.body;
        const hashedPW = await bcrypt.hash(reqData.password, 10)
        const data = { ...reqData, password: hashedPW }
        const user = await UserModel.findOneAndUpdate({_id: req.params.id}, data);
        
        await user.save()
        res.status(200).send(user)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);

        if (user) {
            user.deleteOne(user)
            res.status(200).send("user deleted successfully")
        } else {
            res.status(404).send("Usuário não encontrado");
        }

    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}