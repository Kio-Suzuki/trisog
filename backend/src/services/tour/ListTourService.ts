import prisma from "../../prisma/prismaClient";

class ListTourService {
  async execute() {

    const tours = await prisma.tour.findMany({
      select: {
        id: true,
        location: true,
        country: true,
        continent: true,
        title: true,
        days: true,
        price: true,
        image: true,
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

    const toursCount = await prisma.tour.count();

    return { tours: toursOverall, toursCount};
  }
}

export { ListTourService };
