import prisma from "../../prisma/prismaClient";

class ListReviewService {
  async execute(tourId: number) {
    const reviews = await prisma.review.findMany({
      where: { tourId },
      select: {
        id: true,
        overall: true,
        comment: true,
        services: true,
        locations: true,
        amenities: true,
        prices: true,
        food: true,
        rooms: true,
        tourId: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
          },
        },
      },
    });
    return reviews;
  }
}

export { ListReviewService };