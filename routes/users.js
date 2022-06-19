import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.post('/novo-usuario', createUser)

router.get('/', getAllUsers)

router.get('/:id', getUser)

router.put('/editar-usuario/:id', updateUser)

router.delete('/deletar-usuario/:id', deleteUser)

export default router;