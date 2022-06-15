import express from 'express';
import UserModel from '../models/Users.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const data = await UserModel.find({ "email": email });

        const checkPassword = data.find(user => user.password === password)

        if (!checkPassword) {
            res.status(400).send("Senha incorreta, tente novamente");
        } else {
            res.status(200).end()
        }
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

export default router;