import { Restaurant } from "@/types/restaurant";

const randomDecimal = () => {
  return Math.floor(Math.random() * 1000) / 10;
};

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: "1",
    name: "Maslow - Restaurant Paris 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://picsum.photos/seed/picsum/200/300",
    point: {
      type: "Point",
      coordinates: [48.85818693133482, 2.344326317072389],
    },
    city: "Paris",
    price: randomDecimal(),
  },
  {
    id: "2",
    name: "Passionné Restaurant",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://picsum.photos/seed/picsum/200/300",
    point: {
      type: "Point",
      coordinates: [48.8763014213408, 2.34711436504443],
    },
    city: "Paris",
    price: randomDecimal(),
  },
  {
    id: "3",
    name: "Chefs à Table",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://picsum.photos/seed/picsum/200/300",
    point: {
      type: "Point",
      coordinates: [48.857515238435255, 2.37806410513104],
    },
    city: "Paris",
    price: randomDecimal(),
  },
  {
    id: "4",
    name: "Le Tout-Paris - Cheval Blanc Paris lorem ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://picsum.photos/seed/picsum/200/300",
    point: {
      type: "Point",
      coordinates: [48.859521248661444, 2.34207198690973],
    },
    city: "Paris",
    price: randomDecimal(),
  },
  {
    id: "5",
    name: "Chouchou",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://picsum.photos/seed/picsum/200/300",
    point: {
      type: "Point",
      coordinates: [48.8606050058045, 2.348806524131308],
    },
    city: "Paris",
    price: randomDecimal(),
  },
  {
    id: "6",
    name: "Le Marais Restaurant Paris",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://picsum.photos/seed/picsum/200/300",
    point: {
      type: "Point",
      coordinates: [48.86659905218588, 2.354027735286278],
    },
    city: "Paris",
    price: randomDecimal(),
  },
];
