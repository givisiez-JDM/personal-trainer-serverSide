import express from 'express';
import { createPhysicalEvaluation, getPhysicalEvaluationsByClientId, getPhysicalEvaluation, updatePhysicalEvaluation, deletePhysicalEvaluation, getAllPhysicalEvaluations } from '../controllers/physicalEvaluation.js';

const router = express.Router();

router.post('/nova-avaliacao', createPhysicalEvaluation)

router.get('/lista/:id', getPhysicalEvaluationsByClientId)

router.get('/lista', getAllPhysicalEvaluations)

router.get('/:id', getPhysicalEvaluation)

router.patch('/editar-avaliacao/:id', updatePhysicalEvaluation)

router.delete('/deletar-avaliacao/:id', deletePhysicalEvaluation)

//Measurements
router.post('/nova-avaliacao/medidas', createMeasurement)

router.get('/medidas/:id', getMeasurement)

router.patch('/editar-avaliacao/medidas/:id', updateMeasurement)

router.delete('/deletar-avaliacao/medidas/:id', deleteMeasurement)

//Fat data
router.post('/nova-avaliacao/gordura', createFatData)

router.get('/gordura/:id', getFatData)

router.patch('/editar-avaliacao/gordura/:id', updateFatData)

router.delete('/deletar-avaliacao/gordura/:id', deleteFatData)

export default router;