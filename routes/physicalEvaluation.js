import express from 'express';
import { createPhysicalEvaluation, getPhysicalEvaluationsByClientId, getPhysicalEvaluation, updatePhysicalEvaluation, deletePhysicalEvaluation, getAllPhysicalEvaluations } from '../controllers/physicalEvaluation.js';

const router = express.Router();

router.post('/nova-avaliacao', createPhysicalEvaluation)

router.get('/lista/:id', getPhysicalEvaluationsByClientId)

router.get('/lista', getAllPhysicalEvaluations)

router.get('/:id', getPhysicalEvaluation)

router.patch('/editar-avaliacao/:id', updatePhysicalEvaluation)

router.delete('/deletar-avaliacao/:id', deletePhysicalEvaluation)

export default router;