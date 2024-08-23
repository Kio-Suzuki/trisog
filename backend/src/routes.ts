import { Router } from 'express';
import { ListTourController } from './controllers/tour/ListTourControllers';
import { ListCategoryController } from './controllers/category/ListCategoryController';

const router = Router();

//-- ROUTAS TOURS
router.get('/tours', new ListTourController().handle);

//-- ROUTAS TOURS
router.get('/categories', new ListCategoryController().handle);


export { router }