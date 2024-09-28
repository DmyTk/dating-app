import firestore from "@react-native-firebase/firestore";

import { Restaurant } from "@/types/restaurant";

const collection =
  firestore().collection<Omit<Restaurant, "id">>("restaurants");

class RestaurantsService {
  static async getRestaurants(): Promise<Restaurant[]> {
    const restaurants = await collection.orderBy("name", "asc").get();

    return restaurants.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Restaurant,
    );
  }
}

export default RestaurantsService;
