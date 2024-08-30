import { Request, Response } from 'express';
import { FindToursService } from '../../services/tour/FindToursService';

class FindToursController {
  async handle(request: Request, response: Response) {
    const { search, type, date, guests, page = '1', limit = '9' } = request.query;
    
    const findToursService = new FindToursService();

    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * limitNumber;

    const result = await findToursService.execute({
      search: search as string,
      type: type as string | undefined,
      date: date as string | undefined,
      guests: guests ? parseInt(guests as string, 10) : undefined,
      skip,
      take: limitNumber
    });

    return response.json(result);
  }
}

export { FindToursController };