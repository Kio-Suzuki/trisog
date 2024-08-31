import prisma from "../../prisma/prismaClient";

class DestinationInfoService {
  async execute(destinationId: number) {
    const destination = await prisma.destination.findUnique({
      where: { id: destinationId },
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
        capital: true
      },
    });
    console.log("Countryyyyyyyyyyyyyyyy: ", destination);
    return destination;
  }
}

export { DestinationInfoService };