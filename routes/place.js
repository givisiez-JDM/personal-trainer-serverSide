import express from 'express';
import { createPlace, getAllPlaces, getPlace, updatePlace, deletePlace } from '../controllers/place.js'

const router = express.Router();

router.post('/novo-exercicio', createPlace)

router.get('/', getAllPlaces)

router.get('/:id', getPlace)

router.put('/editar-exercicio/:id', updatePlace)

router.delete('/deletar-exercicio/:id', deletePlace)

export default router;