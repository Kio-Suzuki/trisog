import { Request, Response } from 'express';
import { ListReviewService } from '../../services/review/ListReviewService';

class ListReviewController {
  async handle(request: Request, response: Response) {
    const listReviewsService = new ListReviewService();

    const reviews = await listReviewsService.execute();

    return response.json(reviews);
  }
}

export { ListReviewController };