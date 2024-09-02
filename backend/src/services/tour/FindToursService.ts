import prisma from "../../prisma/prismaClient";

interface FindToursParams {
  search?: string;  
  type?: string[];  
  date?: string;    
  guests?: number;  
  skip: number;     
  take: number;     
  price?: number;   
  order?: string;   
  rating?: number;  
  continentId?: number;
  countries?: string[]; 
}

class FindToursService {
  async execute({ search, type, date, guests, skip, take, price, order, rating, countries }: FindToursParams) {
    const filters: any = {};

    if (search) {
      filters.OR = [
        {
          country: {
            contains: search,
          },
        },
        {
          location: {
            contains: search,
          },
        },
      ]
    }

    if (type) {
      filters.type = {
        in: type,
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

    if (price) {
      filters.price = {
        lte: price,
      };
    }

    if (countries) {
      filters.country = {
        in: countries,
      };
    }

    const orderBy: any = {};

    switch (order) {
      case 'lowPrice':
        orderBy.price = 'asc';
        break;
      case 'highPrice':
        orderBy.price = 'desc';
        break;
      case 'titleAZ':
        orderBy.country = 'asc';
        break;
      case 'titleZA':
        orderBy.country = 'desc';
        break;
      default:
        orderBy.country = 'asc';
        break;
    }

    const tours = await prisma.tour.findMany({
      where: filters,
      skip: skip,
      take: take,
      orderBy: orderBy,
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

    const toursAverage = tours.map(tour => {
      const reviewsCount = tour.reviews.length;
      const average = reviewsCount > 0 
        ? tour.reviews.reduce((sum, review) => sum + review.overall, 0) / reviewsCount 
        : null;

      return {
        ...tour,
        average,
        reviewsCount,
      };
    });

    const filteredTours = rating
      ? toursAverage.filter(tour => tour.average !== null && tour.average >= rating) : toursAverage;

    const toursCount = await prisma.tour.count({
      where: filters,
    });

    return { tours: filteredTours, toursCount };
  }
}

export { FindToursService };
