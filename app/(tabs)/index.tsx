import { AntDesign } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TAB_BAR_OFFSET } from "@/app/(tabs)/_layout";
import ExploreTabEmptyState from "@/components/explore_tab/ExploreTabEmptyState";
import ExploreTabHeader from "@/components/explore_tab/ExploreTabHeader";
import RestaurantCard from "@/components/explore_tab/RestaurantCard";
import LoadingView from "@/components/LoadingView";
import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import useGetRestaurantsQuery from "@/hooks/useGetRestaurantsQuery";
import { Restaurant } from "@/types/restaurant";

export default function ExploreTabScreen() {
  const { top, bottom } = useSafeAreaInsets();

  const { data = [], isLoading } = useGetRestaurantsQuery();

  const [query, setQuery] = useState("");

  const restaurants = query
    ? data.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()))
    : data;

  const renderItem: ListRenderItem<Restaurant> = useCallback(
    ({ item }) => (
      <RestaurantCard
        city={item.city}
        description={item.description}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    ),
    [],
  );

  if (isLoading) {
    return <LoadingView />;
  }

  return (
    <View
      className="flex-1 gap-4"
      style={{
        paddingTop: top,
      }}
    >
      <View className="px-4" style={{ gap: 8 }}>
        <Text className="m-0 text-lg font-bold">Elevate your dates</Text>
        <View className="flex-row items-center" style={{ gap: 8 }}>
          <TextInput
            wrapperClassName="flex-1 rounded-lg"
            className="w-full"
            Icon={<AntDesign name="search1" size={24} color={"gray"} />}
            placeholder="What are you looking for?"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            value={query}
            onChangeText={setQuery}
          />
          <Button className="rounded-lg">
            <AntDesign name="filter" size={24} color="black" />
          </Button>
        </View>
      </View>

      <FlatList
        className="px-4"
        contentContainerStyle={{
          paddingTop: 8,
          paddingBottom: bottom + TAB_BAR_OFFSET + 16,
          flexGrow: 1,
        }}
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<ExploreTabHeader restaurants={restaurants} />}
        ListEmptyComponent={ExploreTabEmptyState}
        ItemSeparatorComponent={() => <View className="h-4" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
