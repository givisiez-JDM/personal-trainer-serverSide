import express from 'express';
import { createPhysicalActivity, deletePhysicalActivity, getAllPhysicalActivities, getPhysicalActivity, updatePhysicalActivity } from '../controllers/physicalActivity';

const router = express.Router();

router.post('/novo-exercicio', createPhysicalActivity)

router.get('/', getAllPhysicalActivities)

router.get('/:id', getPhysicalActivity)

router.patch('/editar-exercicio/:id', updatePhysicalActivity)

router.delete('/deletar-exercicio/:id', deletePhysicalActivity)

export default router;