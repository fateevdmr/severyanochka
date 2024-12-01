import express from "express";
import cors from "cors";
import { Product } from "./types";

const app = express();
const PORT = 5000;


app.use(cors());
app.options("*", cors()); // Для обработки preflight-запросов

const products: Product[] = [
    {
        id: 1,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.5,
        isNew: true,
        quantity: 10,
    },
    {
        id: 2,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        isNew: false,
    },
    {
        id: 3,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        isNew: true,
    },
    {
        id: 4,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.5,
        isNew: true,
        quantity: 10,
    },
    {
        id: 5,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        isNew: false,
    },
    {
        id: 6,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        isNew: true,
    },
    {
        id: 7,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.5,
        isNew: true,
        quantity: 10,
    },
    {
        id: 8,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        isNew: false,
    },
    {
        id: 9,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        isNew: true,
    },
    {
        id: 10,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.5,
        isNew: true,
        quantity: 10,
    },
    {
        id: 11,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        isNew: false,
    },
    {
        id: 12,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        isNew: true,
    },
    {
        id: 13,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.5,
        isNew: true,
        quantity: 10,
    },
    {
        id: 14,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        isNew: false,
    },
    {
        id: 15,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        isNew: true,
    },
    {
        id: 16,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.5,
        isNew: true,
        quantity: 10,
    },
    {
        id: 17,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        isNew: false,
    },
    {
        id: 18,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        isNew: true,
    },
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
