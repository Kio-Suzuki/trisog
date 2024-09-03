import prisma from "../../prisma/prismaClient";

class TourInfoService {
  async execute(tourId: number) {
    const tour = await prisma.tour.findUnique({
      where: { id: tourId },
      select: {
        id: true,
        location: true,
        country: true,
        title: true,
        days: true,
        price: true,
        image: true,
        maxPeople: true,
        minAge: true,
        type: true,
        overview: true,
        latitude: true,
        longitude: true,
        startDate: true,
      },
    });
    return tour;
  }
}

export { TourInfoService };
