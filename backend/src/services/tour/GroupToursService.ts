import prisma from "../../prisma/prismaClient";

class GroupToursService {
  async execute() {
    const africaTours = await prisma.tour.findMany({
      select: {
        id: true,
        country: true,
        continent: true,
      },
      where: {
        continent: 'Africa',
      },
      distinct: ['country', 'continent'],
      orderBy: {
        continent: 'asc',
      },
    });

    const asiaTours = await prisma.tour.findMany({
      select: {
        id: true,
        country: true,
        continent: true,
      },
      where: {
        continent: 'Asia',
      },
      distinct: ['country', 'continent'],
      orderBy: {
        continent: 'asc',
      },
    });

    const europeTours = await prisma.tour.findMany({
      select: {
        id: true,
        country: true,
        continent: true,
      },
      where: {
        continent: 'Europe',
      },
      distinct: ['country', 'continent'],
      orderBy: {
        continent: 'asc',
      },
    });

    const northAmericaTours = await prisma.tour.findMany({
      select: {
        id: true,
        country: true,
        continent: true,
      },
      where: {
        continent: 'North America',
      },
      distinct: ['country', 'continent'],
      orderBy: {
        continent: 'asc',
      },
    });

    const southAmericaTours = await prisma.tour.findMany({
      select: {
        id: true,
        country: true,
        continent: true,
      },
      where: {
        continent: 'South America',
      },
      distinct: ['country', 'continent'],
      orderBy: {
        continent: 'asc',
      },
    });

    const oceaniaTours = await prisma.tour.findMany({
      select: {
        id: true,
        country: true,
        continent: true,
      },
      where: {
        continent: 'Oceania',
      },
      distinct: ['country', 'continent'],
      orderBy: {
        continent: 'asc',
      },
    });

    return { africaTours, asiaTours, europeTours, northAmericaTours, oceaniaTours, southAmericaTours };
  }
}

export { GroupToursService };