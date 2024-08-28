import { Request, Response } from 'express';
import { CountReviewService } from '../../services/review/CountReviewService';

class CountReviewController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;

    const countReview = new CountReviewService();

    const count = await countReview.execute({
      userId
    });

    return response.json(count);
  }
}

export { CountReviewController };