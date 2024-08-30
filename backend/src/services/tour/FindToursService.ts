import prisma from "../../prisma/prismaClient";

interface FindToursParams {
  search: string;      
  type?: string;    
  date?: string;    
  guests?: number;   
  skip: number;         
  take: number;         
}

class FindToursService {
  async execute({ search, type, date, guests, skip, take }: FindToursParams) {

    const filters: any = {
      country: {
        contains: search,
      }
    };

    if (type) {
      filters.type = {
        equals: type,
      };
    }

    if (date) {
      const dateUser = new Date(date);
      const formattedDate = dateUser.toISOString().split('T')[0];
      filters.startDate = {
        lte: formattedDate,
      };
      filters.endDate = {
        gte: formattedDate,
      };
    }

    if (guests !== undefined) {
      filters.maxPeople = {
        gte: guests, 
      };
    }

    const tours = await prisma.tour.findMany({
      where: filters,
      skip: skip,
      take: take,
    });

    const toursCount = await prisma.tour.count({
      where: filters,
    });
    
    return { tours, toursCount };
  }
}

export { FindToursService };
