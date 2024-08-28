import prisma from "../../prisma/prismaClient";

class ListDestinationService {
  async execute() {
    const destinations = await prisma.destination.findMany({
      select: {
        id: true,
        img: true,
        latitude: true,
        longitude: true,
        about: true,
        country: true,
        language: true,
        currency: true,
        area: true,
        population: true,
        timezone: true,
        timetravel: true,
        travelers: true,
        capital: true
      },
    });
    return destinations;
  }
}

export { ListDestinationService };