import UserModel from '../models/Users.js';

export const createUser = async (req, res) => {
    try {
        const data = req.body
        // console.log(data.email)
        // const checkEmail = checkIfUserExists(data.email)

        // if (!checkEmail) {
            const newUser = new UserModel(data);
            await newUser.save();
            res.status(200).send(`user created successfully`)
        // } else {
        //     res.status(409).send(`E-mail cadastrado, tente novamente.`)
        // }
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

// const checkIfUserExists = async (email) => {
//     const emailExist = await UserModel.findOne({email})

//     console.log(emailExist)
//     return emailExist ? true : false;

// }