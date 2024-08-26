import { Router } from 'express';
import { ListTourController } from './controllers/tour/ListTourControllers';
import { TourInfoController } from './controllers/tour/TourInfoControllers';
import { ListDestinationController } from './controllers/destination/ListDestinationControllers';
import { DestinationInfoController } from './controllers/destination/DestinationInfoControllers';
import { ListReviewController } from './controllers/review/ListReviewControllers';
import { AddUserController } from './controllers/user/AddUserControllers';
import { AddReviewController } from './controllers/review/AddReviewController';

const router = Router();

//-- ROTAS TOURS
router.get('/tours', new ListTourController().handle);

router.get('/tours/:id', new TourInfoController().handle);

//-- ROTAS DESTINATIONS

router.get('/destinations', new ListDestinationController().handle);

router.get('/destinations/:id', new DestinationInfoController().handle);

//-- ROTAS REVIEWS

router.get('/reviews', new ListReviewController().handle);
router.put('/reviews', new AddReviewController().handle);

//-- ROTAS USERS

router.post('/user', new AddUserController().handle);

export { router }