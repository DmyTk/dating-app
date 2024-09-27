import { ComponentProps, FC } from "react";
import { ActivityIndicator, View } from "react-native";

type Props = ComponentProps<typeof ActivityIndicator>;

const LoadingView: FC<Props> = ({ size = "large", ...props }) => {
  return (
    <View className="w-full flex-1 items-center justify-center">
      <ActivityIndicator size={size} {...props} />
    </View>
  );
};

export default LoadingView;
