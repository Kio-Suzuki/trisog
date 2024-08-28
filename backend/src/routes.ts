import { Router } from 'express';
import { ListTourController } from './controllers/tour/ListTourControllers';
import { TourInfoController } from './controllers/tour/TourInfoControllers';
import { ListDestinationController } from './controllers/destination/ListDestinationControllers';
import { DestinationInfoController } from './controllers/destination/DestinationInfoControllers';
import { ListReviewController } from './controllers/review/ListReviewControllers';
import { AddUserController } from './controllers/user/AddUserControllers';
import { AddReviewController } from './controllers/review/AddReviewController';
import { TypesTourController } from './controllers/tour/TypesTourController';
import { UserIdController } from './controllers/user/UserIdController';
import { CountReviewUserController } from './controllers/user/CountReviewUserController';
import { CountReviewController } from './controllers/review/CountReviewController';

const router = Router();

//-- ROTAS TOURS
router.get('/tours', new ListTourController().handle);
router.get('/tours/:id', new TourInfoController().handle);
router.get('/tourstypes', new TypesTourController().handle);

//-- ROTAS DESTINATIONS

router.get('/destinations', new ListDestinationController().handle);
router.get('/destinations/:id', new DestinationInfoController().handle);

//-- ROTAS REVIEWS

router.get('/reviews/tour/:tourId', new ListReviewController().handle);
router.post('/reviews', new AddReviewController().handle);
router.get('/reviews/:userId', new CountReviewController().handle);

//-- ROTAS USERS

router.post('/user', new AddUserController().handle);
router.get('/user/:id', new UserIdController().handle);
router.get('/user/reviews/:userId', new CountReviewUserController().handle);

export { router }