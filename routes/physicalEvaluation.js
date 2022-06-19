import express from 'express';
import { createPhysicalEvaluation, getAllPhysicalEvaluations, getPhysicalEvaluation, updatePhysicalEvaluation, deletePhysicalEvaluation } from '../controllers/physicalEvaluation.js';

const router = express.Router();

router.post('/nova-avaliacao', createPhysicalEvaluation)

router.get('/', getAllPhysicalEvaluations)

router.get('/:id', getPhysicalEvaluation)

router.patch('/editar-avaliacao/:id', updatePhysicalEvaluation)

router.delete('/deletar-avaliacao/:id', deletePhysicalEvaluation)

export default router;