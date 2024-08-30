import { Request, Response } from "express";
import { GroupToursService } from "../../services/tour/GroupToursService";

class GroupToursController {
  async handle(request: Request, response: Response) {
    const groupToursService = new GroupToursService();

    const groupTours = await groupToursService.execute();

    return response.json(groupTours);
  }
}

export { GroupToursController };

