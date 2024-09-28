import { useQuery } from "@tanstack/react-query";

import RestaurantsService from "@/services/restaurants";

const GET_RESTAURANTS_QUERY_KEY = "restaurants";

const useGetRestaurantsQuery = () => {
  return useQuery({
    queryKey: [GET_RESTAURANTS_QUERY_KEY],
    queryFn: RestaurantsService.getRestaurants,
  });
};

export default useGetRestaurantsQuery;
