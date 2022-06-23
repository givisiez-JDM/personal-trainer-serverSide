import express from 'express';
import { createExercise, getAllExercises, getExercise, updateExercise, deleteExercise } from '../controllers/exercise.js'

const router = express.Router();

router.post('/novo-exercicio', createExercise)

router.get('/', getAllExercises)

router.get('/:id', getExercise)

router.put('/editar-exercicio/:id', updateExercise)

router.delete('/deletar-exercicio/:id', deleteExercise)

export default router;