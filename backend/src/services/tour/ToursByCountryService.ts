import prisma from "../../prisma/prismaClient";

class ToursByCountryService {
  async execute(id: number) {
    const tours = await prisma.tour.findMany({
      where: { destinationId: id },
      select: {
        id: true,
        image: true,
        location: true,
        country: true,
        title: true,
        days: true,
        price: true,
        reviews: {
          select: {
            overall: true,
          },
        },
      },
    });

    const toursOverall = tours.map(tour => {
      const reviewsCount = tour.reviews.length;
      const average =
        tour.reviews.length > 0 ? tour.reviews.reduce((sum, review) => sum + review.overall, 0) / reviewsCount : null;

      return {
        ...tour,
        average,
        reviewsCount,
      };
    });

    return { tours: toursOverall };

  }
}

export { ToursByCountryService };