import { FC } from "react";
import { Text, View } from "react-native";

const ExploreTabEmptyState: FC = () => {
  return (
    <View className="w-full flex-1 items-center justify-center">
      <Text>No available restaurants</Text>
    </View>
  );
};

export default ExploreTabEmptyState;
