import type { Point } from "geojson";

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  point: Point;
  city: string;
};
