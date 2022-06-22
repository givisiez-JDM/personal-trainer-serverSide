import express from 'express';
import UserModel from '../models/Users.js';
import bcrypt from "bcrypt"

const router = express.Router();

router.post('/', async (req, res) => {    
    try {
        const { email, password } = req.body;
    
        const data = await UserModel.findOne({ "email": email });
    
        const checkPassword = await bcrypt.compare(password, data.password);
        
        if (data != null) {
            if (!checkPassword) {
                res.status(400).send("Senha incorreta, tente novamente");
            } else {
                res.status(200).send(data)
            }
        } else {
            res.status(400).send("E-mail não encontrado, tente novamente");
        }
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

export default router;