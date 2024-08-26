import prisma from "../../prisma/prismaClient";

class AddReviewService {
  async execute(id: number, comment: string, services: number, locations: number, amenities: number, prices: number, food: number, rooms: number, overall: number, userId: string, tourId: number) {
    const review = await prisma.review.create({
      data: {
        id,
        comment,
        services,
        locations,
        amenities,
        prices,
        food,
        rooms,
        overall,
        userId,
        tourId,
      },
    });
    return review;
  }
}

export { AddReviewService };