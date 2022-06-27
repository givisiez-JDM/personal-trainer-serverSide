import express from 'express';
import { createTrainingSession, deleteTrainingSession, getAllTrainingSessions, getTrainingSession, getTrainingSessionsByClientId, getTrainingSessionsByPersonalId, updateTrainingSession } from '../controllers/trainingSession.js';

const router = express.Router();

router.post('/novo-treino', createTrainingSession)

router.get('/lista', getAllTrainingSessions)

router.get('/lista/:id', getTrainingSessionsByPersonalId)

router.get('/lista/cliente/:id', getTrainingSessionsByClientId)

router.get('/:id', getTrainingSession)

router.put('/editar-treino/:id', updateTrainingSession)

router.delete('/deletar-treino/:id', deleteTrainingSession)

export default router;