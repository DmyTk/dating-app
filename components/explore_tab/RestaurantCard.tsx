import { FC } from "react";
import { Restaurant } from "@/types/restaurant";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

const HEIGHT = 100;

type Props = {
  item: Restaurant;
};

const RestaurantCard: FC<Props> = ({ item }) => {
  return (
    <View className="relative">
      <View
        className="border-appBlue z-10 h-[100px] w-full flex-row rounded-lg border bg-white p-2"
        style={{ gap: 8, height: HEIGHT }}
      >
        <Image
          source={{ uri: item.image }}
          className="h-full w-16 rounded"
          contentFit="cover"
        />

        <View style={{ gap: 8 }} className="flex-1">
          <View
            className="flex-row items-center justify-between"
            style={{ gap: 4 }}
          >
            <Text numberOfLines={1} className="font-lg flex-1 font-semibold">
              {item.name}
            </Text>
            <Text>{getPriceLabel(item.price)}</Text>
          </View>
          <Text numberOfLines={2}>{item.description}</Text>
          <Text>{item.city}</Text>
        </View>
      </View>

      <View className="absolute left-1.5 top-1.5 h-full w-full overflow-hidden rounded-lg">
        <LinearGradient
          colors={["#CEDFE6", "#3A6D83"]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0, y: 0 }}
        />
      </View>
    </View>
  );
};

function getPriceLabel(price: number) {
  return `$${Math.round(price)}`;
}

export default RestaurantCard;
