import { Request, Response } from 'express';
import { CountReviewUserService } from '../../services/user/CountRevirewUserService';

class CountReviewUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const countReviewUserService = new CountReviewUserService();

    const count = await countReviewUserService.execute({ userId });

    return response.json(count);
  }
}

export { CountReviewUserController };