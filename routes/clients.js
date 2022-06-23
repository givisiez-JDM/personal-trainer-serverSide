import express from 'express';
import { createClient, getClient, updateClient, deleteClient, getClientsByTrainerId, getAllClients } from '../controllers/clients.js';

const router = express.Router();

router.post('/novo-cliente', createClient)

router.get('/lista/:id', getClientsByTrainerId)

router.get('/lista', getAllClients)

router.get('/:id', getClient)

router.put('/editar-cliente/:id', updateClient)

router.delete('/deletar-cliente/:id', deleteClient)

export default router;