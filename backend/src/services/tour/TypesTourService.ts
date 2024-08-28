import prisma from "../../prisma/prismaClient";

class TypesTourService {
  async execute() {
    const types = await prisma.tour.groupBy({
      by: ['type'],
      _count: {
        type: true,
      },
    });

    return types.map(t => ({
      type: t.type,
      count: t._count.type
    }));
  }
}

export { TypesTourService };
