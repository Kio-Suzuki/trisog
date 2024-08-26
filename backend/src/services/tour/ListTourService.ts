import prisma from "../../prisma/prismaClient";

class ListTourService {
  async execute() {

    const tours = await prisma.tour.findMany({
      select: {
        id: true,
        location: true,
        country: true,
        title: true,
        days: true,
        price: true,
        image: true,
      },
    })
    return tours;   
  }
}

export { ListTourService };