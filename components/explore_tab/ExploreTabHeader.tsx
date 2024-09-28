import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";

import RestaurantsMap from "@/components/explore_tab/RestaurantsMap";
import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import { Restaurant } from "@/types/restaurant";

type Props = {
  restaurants: Restaurant[];
};

const ExploreTabHeader: FC<Props> = ({ restaurants }) => {
  return (
    <View className="mb-6 gap-2">
      <Text className="text-lg font-bold">Elevate your dates</Text>

      <View style={{ gap: 24 }}>
        <View className="flex-row items-center" style={{ gap: 4 }}>
          <TextInput
            wrapperClassName="flex-1"
            className="w-full"
            Icon={<AntDesign name="search1" size={24} color={"gray"} />}
            placeholder="What are you looking for?"
            placeholderTextColor={"gray"}
          />

          <Button>
            <AntDesign name="filter" size={24} color={"black"} />
          </Button>
        </View>

        <RestaurantsMap restaurants={restaurants} />
      </View>
    </View>
  );
};

export default ExploreTabHeader;
