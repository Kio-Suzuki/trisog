import { Request, Response } from 'express';
import { TourInfoService } from '../../services/tour/TourInfoService';

class TourInfoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const tourInfoController = new TourInfoService();

    const tour = await tourInfoController.execute(parseInt(id));

    return response.json(tour);
  }
}

export { TourInfoController };