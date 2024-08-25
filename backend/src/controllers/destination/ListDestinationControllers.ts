import { Request, Response } from 'express';
import { ListDestinationService } from '../../services/destination/ListDestinationService';

class ListDestinationController {
  async handle(request: Request, response: Response) {
    const listDestinationService = new ListDestinationService();

    const destination = await listDestinationService.execute();

    return response.json(destination);
  }
}

export { ListDestinationController };