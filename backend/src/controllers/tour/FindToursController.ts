import { Request, Response } from 'express';
import { FindToursService } from '../../services/tour/FindToursService';

class FindToursController {
  async handle(request: Request, response: Response) {
    const { search, type, date, guests, page = '1', limit = '9', price, order, rating } = request.query;
    
    try {
      console.log(request.query);

      const findToursService = new FindToursService();

      const pageNumber = parseInt(page as string, 10);
      const limitNumber = parseInt(limit as string, 10);
      const skip = (pageNumber - 1) * limitNumber;
      const typesArray = type ? (type as string).split(',') : [];
      const ratingNumber = rating ? parseFloat(rating as string) : undefined;

      const result = await findToursService.execute({
        search: search as string,
        type: typesArray.length > 0 ? typesArray : undefined,
        date: date as string | undefined,
        guests: guests ? parseInt(guests as string, 10) : undefined,
        price: price ? parseFloat(price as string) : undefined,
        rating: ratingNumber,
        skip,
        take: limitNumber,
        order: order as string | undefined,
      });

      return response.json(result);
    } catch (error) {
      console.error("Error finding tours:", error);
      return response.status(500).json({ error: 'An error occurred while fetching tours' });
    }
  }
}

export { FindToursController };