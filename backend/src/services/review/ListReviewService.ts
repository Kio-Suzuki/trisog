import prisma from "../../prisma/prismaClient";

class ListReviewService {
  async execute() {
    const reviews = await prisma.review.findMany({
      select: {
        id: true,
        overall: true,
        comment: true,
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
          },
        },
      },
    });
    return reviews;
  }
}

export { ListReviewService };