import { FeatureCollection, Point } from "geojson";
import { center } from "@turf/turf";

export function getCenterFromPoints(points: Point[]) {
  const geoJsonPoints: FeatureCollection<Point> = {
    type: "FeatureCollection",
    features: points.map((point) => ({
      type: "Feature",
      geometry: point,
      properties: {},
    })),
  };

  return center(geoJsonPoints);
}
