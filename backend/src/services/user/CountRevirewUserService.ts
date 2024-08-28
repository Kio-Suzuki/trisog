import prisma from "../../prisma/prismaClient";

class CountReviewUserService {
  async execute({ userId }: { userId: string }) {
    const count = await prisma.review.count({
      where: { userId }
    });
    return count;
  }
}

export { CountReviewUserService };