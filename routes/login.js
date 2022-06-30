import express from 'express';
import UserModel from '../models/Users.js';
import bcrypt from "bcrypt"
import passport from "passport";

const router = express.Router();

const successLoginURL = 'https://personal-and-training.herokuapp.com/'
const errorLoginURL = 'https://personal-and-training.herokuapp.com/error'

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

router.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile']}))

router.get('/auth/google/callback', passport.authenticate('google', {
    failureMessage: 'Falha ao fazer login, tente novamente.',
    failureRedirect: errorLoginURL,
    successRedirect: successLoginURL
}), (req, res) => {
    console.log("User: ", user)
})

export default router;