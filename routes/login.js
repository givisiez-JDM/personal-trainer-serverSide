import express from 'express';
import UserModel from '../models/Users.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const data = await UserModel.findOne({ "email": email });

        const passwordDB = String(data.password)
        
        const checkPassword = passwordDB === password ? true : false

        if (!checkPassword) {
            res.status(400).send("E-mail ou senha incorretos, tente novamente");
        } else {
            console.log("Login feito com sucesso!");
            res.status(200).send(data)
        }
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

export default router;