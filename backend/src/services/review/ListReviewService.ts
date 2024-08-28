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

    const overallService = reviewsCount > 0
      ? reviews.reduce((sum, review) => sum + review.services, 0) / reviewsCount : 0;

    const overallLocation = reviewsCount > 0
      ? reviews.reduce((sum, review) => sum + review.locations, 0) / reviewsCount : 0;
    
    const overallAmenities = reviewsCount > 0
      ? reviews.reduce((sum, review) => sum + review.amenities, 0) / reviewsCount : 0;
    
    const overallPrices = reviewsCount > 0
      ? reviews.reduce((sum, review) => sum + review.prices, 0) / reviewsCount : 0;
    
    const overallFood = reviewsCount > 0
      ? reviews.reduce((sum, review) => sum + review.food, 0) / reviewsCount : 0;

    const overallRooms = reviewsCount > 0
      ? reviews.reduce((sum, review) => sum + review.rooms, 0) / reviewsCount : 0;

    return { reviews, overallAverage, reviewsCount, overallService, overallLocation, overallAmenities, overallPrices, overallFood, overallRooms };

  }
}

export { ListReviewService };