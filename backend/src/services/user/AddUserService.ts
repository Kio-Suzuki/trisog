import prisma from "../../prisma/prismaClient";

class AddUserService {
  async execute(id: string, email: string, firstname: string, lastname: string) {
    const user = await prisma.user.create({
      data: {
        id,
        email,
        firstname,
        lastname,
      },
    });
    return user;
  }
}

export { AddUserService };