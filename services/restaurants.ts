import { MOCK_RESTAURANTS } from "@/mocks/restaurants";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// TODO: integrate firebase
class RestaurantsService {
  static async getRestaurants() {
    await delay(1000);
    return MOCK_RESTAURANTS;
  }
}

export default RestaurantsService;
