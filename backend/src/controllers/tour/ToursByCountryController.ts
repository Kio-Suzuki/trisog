import { Request, Response } from 'express';
import { ToursByCountryService } from '../../services/tour/ToursByCountryService';

class ToursByCountryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const toursByCountryService = new ToursByCountryService();

    const tour = await toursByCountryService.execute(parseInt(id));

    return response.json(tour);
  }
}

export { ToursByCountryController };