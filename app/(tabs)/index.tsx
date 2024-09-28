import { useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TAB_BAR_OFFSET } from "@/app/(tabs)/_layout";
import ExploreTabEmptyState from "@/components/explore_tab/ExploreTabEmptyState";
import ExploreTabHeader from "@/components/explore_tab/ExploreTabHeader";
import RestaurantCard from "@/components/explore_tab/RestaurantCard";
import LoadingView from "@/components/LoadingView";
import useGetRestaurantsQuery from "@/hooks/useGetRestaurantsQuery";
import { Restaurant } from "@/types/restaurant";

export default function ExploreTabScreen() {
  const { top, bottom } = useSafeAreaInsets();

  const { data, isLoading } = useGetRestaurantsQuery();

  const renderItem: ListRenderItem<Restaurant> = useCallback(
    ({ item }) => <RestaurantCard item={item} />,
    [],
  );

  if (isLoading) {
    return <LoadingView />;
  }

  const restaurants = data ?? [];

  return (
    <FlatList
      className="px-4"
      contentContainerStyle={{
        paddingTop: top,
        paddingBottom: bottom + TAB_BAR_OFFSET + 16,
        flexGrow: 1,
      }}
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={<ExploreTabHeader restaurants={restaurants} />}
      ListEmptyComponent={ExploreTabEmptyState}
      ItemSeparatorComponent={() => <View className="h-4" />}
      showsVerticalScrollIndicator={false}
    />
  );
}
