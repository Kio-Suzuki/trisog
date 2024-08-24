import { Router } from 'express';
import { ListTourController } from './controllers/tour/ListTourControllers';
import { TourInfoController } from './controllers/tour/TourInfoControllers';

const router = Router();

//-- ROUTAS TOURS
router.get('/tours', new ListTourController().handle);

router.get('/tours/:id', new TourInfoController().handle);

export { router }