import express from "express";
import cors from "cors";
import { Product } from "./types";
import path from "path";

const app = express();
const PORT = 5000;

app.use(cors());
app.options("*", cors());
app.use('/static', express.static(path.join(__dirname, 'public')));

const products: Product[] = [
    {
        id: 1,
        name: "Колбаса Мясная История Сальчичон",
        price: 320,
        discountPrice: 210,
        img: "http://localhost:5000/static/images/sausage.png",
        rating: 4,
        category: 'stock',
    },
    {
        id: 2,
        name: "Г/Ц Блинчики с мясом вес, Россия",
        price: 50.5,
        discountPrice: 44.5,
        img: "http://localhost:5000/static/images/pancakes.png",
        rating: 5,
        category: 'stock',
    },
    {
        id: 3,
        name: "Молоко ПРОСТОКВАШИНО паст. питьевое 960 г",
        price: 120,
        discountPrice: 90,
        img: "http://localhost:5000/static/images/milk.png",
        rating: 4,
        category: 'stock',
    },
    {
        id: 4,
        name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ",
        price: 210,
        discountPrice: 105,
        img: "http://localhost:5000/static/images/sausa.png",
        rating: 4.5,
        category: 'stock',
    },
    {
        id: 5,
        name: "Мороженое МАГНАТ шоколадный трюфель",
        price: 150,
        discountPrice: 120,
        img: "http://localhost:5000/static/images/icecream.png",
        rating: 5,
        category: 'stock',
    },
    {
        id: 6,
        name: "Кофе NESCAFE GOLD раств.субл.85г",
        price: 250,
        discountPrice: 200,
        img: "http://localhost:5000/static/images/coffee.png",
        rating: 4,
        category: 'stock',
    },
    {
        id: 7,
        name: "Сыр СВАЛЯ Сметанковый 50%",
        price: 180,
        discountPrice: 150,
        img: "http://localhost:5000/static/images/cheese.png",
        rating: 4.5,
        category: 'stock',
    },
    {
        id: 8,
        name: "Чай AHMAD TEA English Breakfast",
        price: 90,
        discountPrice: 75,
        img: "http://localhost:5000/static/images/tea.png",
        rating: 4,
        category: 'stock',
    },
    {
        id: 9,
        name: "Шоколад MILKA молочный с орехами",
        price: 120,
        discountPrice: 95,
        img: "http://localhost:5000/static/images/chocolate.png",
        rating: 5,
        category: 'newProducts',
    },
    {
        id: 10,
        name: "Печенье OREO классическое",
        price: 80,
        discountPrice: 65,
        img: "http://localhost:5000/static/images/cookies.png",
        rating: 4.5,
        category: 'newProducts',
    },
    {
        id: 11,
        name: "Сок J7 апельсиновый 1л",
        price: 140,
        discountPrice: 110,
        img: "http://localhost:5000/static/images/juice.png",
        rating: 4,
        category: 'newProducts',
    },
    {
        id: 12,
        name: "Йогурт DANONE клубничный",
        price: 45,
        discountPrice: 35,
        img: "http://localhost:5000/static/images/yogurt.png",
        rating: 4.5,
        category: 'newProducts',
    },
    {
        id: 13,
        name: "Хлеб БОРОДИНСКИЙ нарезной",
        price: 60,
        discountPrice: 50,
        img: "http://localhost:5000/static/images/bread.png",
        rating: 4,
        category: 'newProducts',
    },
    {
        id: 14,
        name: "Макароны BARILLA Спагетти",
        price: 95,
        discountPrice: 80,
        img: "http://localhost:5000/static/images/pasta.png",
        rating: 5,
        category: 'newProducts',
    },
    {
        id: 15,
        name: "Рис АГРОАЛЬЯНС Жасмин",
        price: 130,
        discountPrice: 100,
        img: "http://localhost:5000/static/images/rice.png",
        rating: 4,
        category: 'newProducts',
    },
    {
        id: 16,
        name: "Масло ОЛЕЙНА подсолнечное",
        price: 160,
        discountPrice: 130,
        img: "http://localhost:5000/static/images/oil.png",
        rating: 4.5,
        category: 'newProducts',
    },
    {
        id: 17,
        name: "Яблоки Гала",
        price: 89,
        discountPrice: 69,
        img: "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png",
        rating: 4.5,
        category: 'catalog',
    },
    {
        id: 18,
        name: "Яблоки Голден",
        price: 99,
        discountPrice: 79,
        img: "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png",
        rating: 4.5,
        category: 'catalog',
    },
    {
        id: 19,
        name: "Яблоки Фуджи",
        price: 109,
        discountPrice: 89,
        img: "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png",
        rating: 4.5,
        category: 'catalog',
    }
];

app.get("/api/products", (_, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
