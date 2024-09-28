import { FC } from "react";
import { Text, View } from "react-native";

type Props = {};

const AccountTabScreen: FC<Props> = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Account</Text>
    </View>
  );
};

export default AccountTabScreen;
