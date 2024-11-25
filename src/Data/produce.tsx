import pancakes from "../Images/pancakes.png";
import milk from "../Images/milk.png";
import sausage from "../Images/sausage.png";
import sausa from "../Images/sausa.png";
import cream from "../Images/cream.jpeg";
import maffins from "../Images/maffins.jpeg";
import brisket from "../Images/brisket.jpeg";
import towels from "../Images/towels.jpeg";
import maslo from "../Images/maslo.png";
import tvorog from "../Images/tvorog.png";
import yogurt from "../Images/yogurt.png";
import cheesep from "../Images/cheesep.png";
import tea from "../Images/tea.png";
import carrot from "../Images/carrot.png";
import apple from "../Images/apple.png";
import sprat from "../Images/sprat.png";
import { Product } from "../types/product";

const produce: Product[] = [
  {
    id: 1,
    name: "Колбаса Мясная История Сальчичон",
    price: 320,
    discountPrice: 210,
    img: sausage,
    rating: 4,
    isNew: true,
  },
  {
    id: 2,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    price: 50.5,
    discountPrice: 44.5,
    img: pancakes,
    rating: 5,
    isNew: true,
  },
  {
    id: 3,
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое 960 г",
    price: 120,
    discountPrice: 90,
    img: milk,
    rating: 4,
    isNew: true,
  },
  {
    id: 4,
    name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ",
    price: 210,
    discountPrice: 105,
    img: sausa,
    rating: 5,
    isNew: true,
  },
  {
    id: 5,
    name: "Сливки Станция Молочная 500мл",
    price: 210,
    discountPrice: 179,
    img: cream,
    rating: 4,
    isNew: true,
  },
  {
    id: 6,
    name: "Мини-маффины Шарлиз 433г",
    price: 230,
    discountPrice: 164,
    img: maffins,
    rating: 5,
    isNew: true,
  },
  {
    id: 7,
    name: "Масло подсолнечное",
    price: 159,
    discountPrice: 104,
    img: brisket,
    rating: 5,
    isNew: true,
  },
  {
    id: 8,
    name: "Полотенца бумажные Tolli 2 слоя 2шт.",
    price: 120,
    discountPrice: 79,
    img: towels,
    rating: 4,
    isNew: true,
  },
  {
    id: 9,
    name: 'Масло "Из Вологды" Крестьянское 72,5% 180г',
    price: 510,
    discountPrice: 380,
    img: maslo,
    rating: 5,
    isNew: false,
  },
  {
    id: 10,
    name: 'Творог "Вкуснотеево", 5%, 450 г',
    price: 164,
    discountPrice: 149,
    img: tvorog,
    rating: 5,
    isNew: false,
  },
  {
    id: 11,
    name: "Йогурт протеиновый",
    price: 180,
    discountPrice: 90,
    img: yogurt,
    rating: 4,
    isNew: false,
  },
  {
    id: 12,
    name: "Сырок Советские традиции сгущенка 26% 45г",
    price: 62,
    discountPrice: 48,
    img: cheesep,
    rating: 5,
    isNew: false,
  },
  {
    id: 13,
    name: "Морковь белорусская мытая",
    price: 62,
    discountPrice: 48,
    img: carrot,
    rating: 5,
    isNew: false,
  },
  {
    id: 14,
    name: 'Чай зеленый "Curtis" пирамидки г',
    price: 140,
    discountPrice: 89,
    img: tea,
    rating: 5,
    isNew: false,
  },
  {
    id: 15,
    name: "Яблоки Гала",
    price: 62,
    discountPrice: 48,
    img: apple,
    rating: 5,
    isNew: false,
  },
  {
    id: 16,
    name: "Килька Вкусные консервы в томатном соусе, 240г",
    price: 62,
    discountPrice: 48,
    img: sprat,
    rating: 5,
    isNew: false,
  },
];

export default produce;
