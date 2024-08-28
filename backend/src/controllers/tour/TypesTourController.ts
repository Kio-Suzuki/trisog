import { Request, Response } from 'express';
import { TypesTourService } from '../../services/tour/TypesTourService';

class TypesTourController {
  async handle(request: Request, response: Response) {
    try {
      const typesTourService = new TypesTourService();

      const types = await typesTourService.execute();

      return response.json(types);
    } catch (error) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}

export { TypesTourController };
