import { Request, Response } from "express";
import { DestinationInfoService } from "../../services/destination/DestinationInfoService";

class DestinationInfoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const destinationInfoController = new DestinationInfoService();

    const destination = await destinationInfoController.execute(parseInt(id));

    return response.json(destination);
  }
}

export { DestinationInfoController };