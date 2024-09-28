import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Point } from "geojson";
import { FC, useMemo } from "react";
import { View } from "react-native";
import MapView, { LatLng, Marker } from "react-native-maps";

import Button from "@/components/ui/Button";
import { Restaurant } from "@/types/restaurant";
import { getCenterFromPoints } from "@/utils/geolocationHelper";

const DEFAULT_CENTER: LatLng = {
  latitude: 48.86690832988803,
  longitude: 2.360068046020385,
};

type Props = {
  restaurants: Restaurant[];
};

const RestaurantsMap: FC<Props> = ({ restaurants }) => {
  const mapCenter = useMemo(() => {
    if (!restaurants.length) return DEFAULT_CENTER;

    const points = restaurants.map(
      (r): Point => ({
        type: "Point",
        coordinates: [r.point.latitude, r.point.longitude],
      }),
    );
    const center = getCenterFromPoints(points);
    const mapCenter: LatLng = {
      latitude: center.geometry.coordinates[0],
      longitude: center.geometry.coordinates[1],
    };

    return mapCenter;
  }, [restaurants]);

  return (
    <View className="relative overflow-hidden rounded-xl">
      <MapView
        style={{ height: 300 }}
        className="h-full"
        initialCamera={{
          center: mapCenter,
          heading: 0,
          zoom: 0,
          pitch: 0,
          altitude: 5000,
        }}
      >
        {restaurants.map((r) => (
          <Marker
            key={`marker-${r.id}`}
            coordinate={{
              latitude: r.point.latitude,
              longitude: r.point.longitude,
            }}
          >
            <RestaurantMarker />
          </Marker>
        ))}
      </MapView>

      <View className="absolute right-2 top-2 flex-row gap-1">
        <Button variant={"circle"} className="bg-white shadow">
          <Entypo name="pencil" size={20} color="black" />
        </Button>
        <Button variant={"circle"} className="bg-white shadow">
          <MaterialIcons name="visibility-off" size={20} color="black" />
        </Button>
        <Button variant={"circle"} className="bg-white shadow">
          <FontAwesome name="expand" size={20} color="black" />
        </Button>
      </View>
    </View>
  );
};

const RestaurantMarker: FC = () => (
  <View className="h-8 w-8 items-center justify-center rounded-full border border-white bg-black">
    <Ionicons
      name="restaurant-sharp"
      size={20}
      color="white"
      style={{ marginLeft: 1 }}
    />
  </View>
);

export default RestaurantsMap;
