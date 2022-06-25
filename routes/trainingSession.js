import express from 'express';
import { createTrainingSession, deleteTrainingSession, getAllTrainingSession, getTrainingSession, getTrainingSessionByPersonalId, updateTrainingSession } from '../controllers/trainingSession.js';

const router = express.Router();

router.post('/novo-treino', createTrainingSession)

router.get('/lista', getAllTrainingSession)

router.get('/lista/:id', getTrainingSessionByPersonalId)

router.get('/:id', getTrainingSession)

router.put('/editar-treino/:id', updateTrainingSession)

router.delete('/deletar-treino/:id', deleteTrainingSession)

export default router;