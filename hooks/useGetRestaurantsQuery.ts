import { useQuery } from "@tanstack/react-query";

import RestaurantsService from "@/services/restaurants";

export const GET_RESTAURANTS_QUERY_KEY = "get_restaurants";

const useGetRestaurantsQuery = () => {
  return useQuery({
    queryKey: [GET_RESTAURANTS_QUERY_KEY],
    queryFn: RestaurantsService.getRestaurants,
  });
};

export default useGetRestaurantsQuery;
