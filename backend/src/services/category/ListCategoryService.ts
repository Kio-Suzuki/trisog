import prisma from "../../prisma/prismaClient";

class ListCategoryService {
  async execute() {

    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    })
    return categories;   
  }
}

export { ListCategoryService };