import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FC, memo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const HEIGHT = 100;

type Props = {
  image: string;
  name: string;
  description: string;
  price: number;
  city: string;
};

const RestaurantCard: FC<Props> = ({
  description,
  image,
  name,
  price,
  city,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <View className="relative">
      <View
        className="z-10 w-full flex-row rounded-lg border border-appBlue bg-white p-2"
        style={{ gap: 8, height: HEIGHT }}
      >
        <View className="relative">
          <Image
            source={{ uri: image }}
            className="h-full w-16 rounded"
            contentFit="cover"
          />
          <Pressable
            className="absolute left-1 top-1"
            onPress={() => setIsBookmarked((prev) => !prev)}
          >
            <Ionicons
              name={isBookmarked ? "bookmark" : "bookmark-outline"}
              color={isBookmarked ? "white" : "black"}
              size={18}
            />
          </Pressable>
        </View>

        <View style={{ gap: 8 }} className="flex-1">
          <View
            className="flex-row items-center justify-between"
            style={{ gap: 4 }}
          >
            <Text numberOfLines={1} className="font-lg flex-1 font-semibold">
              {name}
            </Text>
            <Text>{getPriceLabel(price)}</Text>
          </View>
          <Text numberOfLines={2} className="text-zinc-500">
            {description}
          </Text>
          <Text className="text-zinc-500">{city}</Text>
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
  if (price <= 10) return "$";
  if (price <= 50) return "$$";
  else return "$$$";
}

export default memo(RestaurantCard);
