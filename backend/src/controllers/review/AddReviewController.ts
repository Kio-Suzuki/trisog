import { Request, Response } from 'express';
import { AddReviewService } from '../../services/review/AddReviewService';

class AddReviewController {
  async handle(request: Request, response: Response) {
    const { id, comment, services, locations, amenities, prices, food, rooms, overall, userId, tourId } = request.body;

    const addReview = new AddReviewService();

    const review = await addReview.execute(id, comment, services, locations, amenities, prices, food, rooms, overall, userId, tourId);

    return response.json(review);
  }
}

export { AddReviewController };