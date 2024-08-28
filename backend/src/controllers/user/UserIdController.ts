import { Request, Response } from 'express';
import { UserIdService } from '../../services/user/UserIdService';

class UserIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const userIdController = new UserIdService();

    const user = await userIdController.handle(id);

    return response.json(user);
  }
}

export { UserIdController };