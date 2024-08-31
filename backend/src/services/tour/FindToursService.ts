import prisma from "../../prisma/prismaClient";

interface FindToursParams {
  search?: string;  // Pesquisa por país ou localização
  type?: string[];  // Tipos de tour
  date?: string;    // Data do tour
  guests?: number;  // Número de convidados
  skip: number;     // Número de registros a serem pulados
  take: number;     // Número de registros a serem retornados
  price?: number;   // Preço máximo do tour
  order?: string;   // Ordenação
  rating?: number;  // Avaliação mínima
  continentId?: number; // Filtro por continente
}

class FindToursService {
  async execute({ search, type, date, guests, skip, take, price, order, rating, continentId }: FindToursParams) {
    const filters: any = {};

    // Filtrar por nome de país ou localização, se especificado
    if (search) {
      filters.country = {
        contains: search,
      };
    }

    // Filtrar por tipo de tour, se especificado
    if (type) {
      filters.type = {
        in: type,
      };
    }

    // Filtrar por data, se especificado
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

    // Filtrar por número de convidados, se especificado
    if (guests !== undefined) {
      filters.maxPeople = {
        gte: guests, 
      };
    }

    // Filtrar por preço, se especificado
    if (price) {
      filters.price = {
        lte: price,
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
        orderBy.title = 'asc';
        break;
      case 'titleZA':
        orderBy.title = 'desc';
        break;
      default:
        orderBy.title = 'asc';
        break;
    }

    // Buscar tours da base de dados
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

    console.log('Tours Average:', toursAverage);
    console.log('Rating Filter:', rating);

    return { tours: filteredTours, toursCount };
  }
}

export { FindToursService };
