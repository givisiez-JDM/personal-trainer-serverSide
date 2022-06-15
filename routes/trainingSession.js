import express from 'express';
import { createTrainingSession, deleteTrainingSession, getAllTrainingSession, getTrainingSession, updateTrainingSession } from '../controllers/trainingSession.js';

const router = express.Router();

router.post('/novo-treino', createTrainingSession)

router.get('/', getAllTrainingSession)

router.get('/:id', getTrainingSession)

router.patch('/editar-treino', updateTrainingSession)

router.delete('/deletar-treino', deleteTrainingSession)

export default router;