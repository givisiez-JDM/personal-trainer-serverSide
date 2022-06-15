import express from 'express';
import { createClient, getAllClients, getClient, updateClient, deleteClient } from '../controllers/clients.js';

const router = express.Router();

router.post('/novo-cliente', createClient)

router.get('/', getAllClients)

router.get('/:id', getClient)

router.patch('/editar-cliente', updateClient)

router.delete('/', deleteClient)

export default router;