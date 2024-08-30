import { Request, Response } from 'express';
import { FindToursService } from '../../services/tour/FindToursService';

class FindToursController {
  async handle(request: Request, response: Response) {
    const { search = '', page = '1', limit = '9' } = request.query;
    const findToursService = new FindToursService();

    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * limitNumber;

    const result = await findToursService.execute(search as string, skip, limitNumber);

    return response.json(result);
  }
}

export { FindToursController };
