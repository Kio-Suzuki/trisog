import { Request, Response } from 'express';
import { ListTourService } from '../../services/tour/ListTourService';

class ListTourController {
  async handle(request: Request, response: Response) {
    const listTourService = new ListTourService();

    const tour = await listTourService.execute();

    return response.json(tour);
  }
}

export { ListTourController };