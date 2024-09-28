export type Restaurant = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  point: { latitude: number; longitude: number };
  city: string;
};
