import prisma from "../../prisma/prismaClient";

interface TypeIconMap {
  [key: string]: string;
}

class TypesTourService {
  async execute() {
    
    const types = await prisma.tour.groupBy({
      by: ['type'],
      _count: {
        type: true,
      },
      _min: {
        price: true,
      },
    });

    const icons = await prisma.tour.findMany({
      select: {
        type: true,
        iconimg: true,
      },
      distinct: ['type'],
    });

    const iconMap: TypeIconMap = icons.reduce((acc, { type, iconimg }) => {
      acc[type] = iconimg;
      return acc;
    }, {} as TypeIconMap);

    return types.map(t => ({
      type: t.type,
      count: t._count.type,
      minPrice: t._min.price,
      iconimg: iconMap[t.type],
    }));
  }
}

export { TypesTourService };
