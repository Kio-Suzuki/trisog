import { Request, Response } from 'express';
import { AddUserService } from '../../services/user/AddUserService';

class AddUserController {
  async handle(request: Request, response: Response) {
    const { id, email, firstname, lastname } = request.body;

    const addUser = new AddUserService();

    const user = await addUser.execute(id, email, firstname, lastname);

    return response.json(user);
  }
}

export { AddUserController };