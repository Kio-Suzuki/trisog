import prisma from "../../prisma/prismaClient";

interface ReviewRequest {
  name?: string;
  email?: string;
  image?: string;
  comment: string;
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  rooms: number;
  userId: string;
  tourId: number;
}

class AddReviewService {
  async execute({ name, email, image, comment, services, locations, amenities, prices, food, rooms, userId, tourId} : ReviewRequest ) {

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    const overall = parseFloat(((services + locations + amenities + prices + food + rooms) / 6).toFixed(1));

    const review = await prisma.review.create({
      data: {
        name: name || user?.firstname,
        email: email || user?.email,
        image: image || user?.image,
        comment,
        services,
        locations,
        amenities,
        prices,
        food,
        rooms,
        overall,
        userId,
        tourId
      }
    });
    
    return review;
  }
}

export { AddReviewService };