import prisma from "../../prisma/prismaClient";

interface UserRequest {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  image: string;
}

class AddUserService {
  async execute({ id, email, firstname, lastname, image }: UserRequest) {
    const user = await prisma.user.create({
      data: {
        id,
        email,
        firstname,
        lastname,
        image,
      },
    });
    return user;
  }
}

export { AddUserService };