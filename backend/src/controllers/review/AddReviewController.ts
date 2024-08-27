import { Request, Response } from 'express';
import { AddReviewService } from '../../services/review/AddReviewService';

class AddReviewController {
  async handle(request: Request, response: Response) {
    const { name, email, image, comment, services, locations, amenities, prices, food, rooms, userId, tourId } = request.body;

    const addReview = new AddReviewService();

    const review = await addReview.execute({
      name,
      email,
      image,
      comment, 
      services, 
      locations, 
      amenities, 
      prices, 
      food, 
      rooms,
      userId, 
      tourId
    });

    return response.json(review);
  }
}

export { AddReviewController };