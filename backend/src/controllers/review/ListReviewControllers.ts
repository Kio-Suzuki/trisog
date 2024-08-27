import { Request, Response } from 'express';
import { ListReviewService } from '../../services/review/ListReviewService';

class ListReviewController {
  async handle(request: Request, response: Response) {
    const { tourId } = request.params;
    const listReviewsService = new ListReviewService();

    const reviews = await listReviewsService.execute(parseInt(tourId));

    return response.json(reviews);
  }
}

export { ListReviewController };