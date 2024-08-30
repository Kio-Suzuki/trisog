import prisma from "../../prisma/prismaClient";

class FindToursService {
  async execute(search: string, skip: number, take: number ) {
    
    const tours = await prisma.tour.findMany({
      where: {
        country: {
          contains: search,
        }
      },
      skip: skip,
      take: take,
    });

    const toursCount = await prisma.tour.count({
      where: {
        country: {
          contains: search,
        }
      }
    });

    console.log(`Tours count: ${toursCount}`);

    return { tours, toursCount };
  }
}

export { FindToursService };
