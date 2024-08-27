import prisma from "../../prisma/prismaClient";

class ListReviewService {
  async execute(tourId: number) {
    const reviews = await prisma.review.findMany({
      where: { tourId },
      select: {
        id: true,
        name: true,
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
            image: true,
          },
        },
      },
    });

    const reviewsCount = reviews.length;
    const overallAverage = reviewsCount > 0 
      ? reviews.reduce((sum, review) => sum + review.overall, 0) / reviewsCount : 0;

    return { reviews, overallAverage, reviewsCount };

  }
}

export { ListReviewService };