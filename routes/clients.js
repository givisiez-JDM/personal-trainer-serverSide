import express from 'express';
import ClientModel from '../models/Clients.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = req.body;
        const newUser = new ClientModel(user);
    
        await newUser.save();
        res.json(`client created succsfully`)   
    } catch (err) {
        res.json({ message: err.message });
    }
})

router.get('/', (req, res) => {
    ClientModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    })
})

// router.get('/:id')

// router.put('/')

// router.delete('/')

export default router;