import prisma from "../../prisma/prismaClient";

class UserIdService {
  async handle(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstname: true,
        image: true,
      },
    });
    return user;
  }
}

export { UserIdService };