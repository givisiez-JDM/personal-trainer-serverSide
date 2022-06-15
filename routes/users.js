import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.post('/novo-usuario', createUser)

router.get('/', getAllUsers)

router.get('/:id', getUser)

router.put('/editar-usuario', updateUser)

router.delete('/deletar-usuario', deleteUser)

export default router;