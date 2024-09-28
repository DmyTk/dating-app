import { FC, memo } from "react";
import { View } from "react-native";

import RestaurantsMap from "@/components/explore_tab/RestaurantsMap";
import { Restaurant } from "@/types/restaurant";

type Props = {
  restaurants: Restaurant[];
};

const ExploreTabHeader: FC<Props> = ({ restaurants }) => {
  return (
    <View className="mb-6">
      <RestaurantsMap restaurants={restaurants} />
    </View>
  );
};

export default memo(ExploreTabHeader);
