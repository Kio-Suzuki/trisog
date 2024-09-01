import prisma from "../../prisma/prismaClient";

class GroupToursService {
  async execute() {
    const continentTours = await prisma.tour.findMany({
      select: {
        id: true,
        country: true,
        continent: true,
      },
    
      distinct: ['country'],
      
    });

    return { continentTours };
  }
}

export { GroupToursService };