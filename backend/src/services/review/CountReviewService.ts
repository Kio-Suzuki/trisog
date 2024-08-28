import prisma from "../../prisma/prismaClient";

class CountReviewService {

  async execute({ userId }: { userId: string }) {

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    const count = await prisma.review.count();
    return count;
  }
}

export { CountReviewService };