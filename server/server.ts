import express from "express";
import cors from "cors";
import { Product } from "./types";

const app = express();
const PORT = 5000;


app.use(cors());
app.options("*", cors()); 

const products: Product[] = [
    {
        id: 1,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 5,
        quantity: 10,
    },
    {
        id: 2,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        quantity: 10,
    },
    {
        id: 3,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        quantity: 10,
    },
    {
        id: 4,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 5,
        quantity: 10,
    },
    {
        id: 5,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        quantity: 10,
    },
    {
        id: 6,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        quantity: 10,
    },
    {
        id: 7,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 5,
        quantity: 10,
    },
    {
        id: 8,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        quantity: 10,
        },
    {
        id: 9,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        quantity: 10,
    },
    {
        id: 10,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 5,
        quantity: 10,
    },
    {
        id: 11,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        quantity: 10,
        },
    {
        id: 12,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        quantity: 10,
    },
    {
        id: 13,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 5,
        quantity: 10,
    },
    {
        id: 14,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        quantity: 10,
        },
    {
        id: 15,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        quantity: 10,
    },
    {
        id: 16,
        name: "Яблоки",
        price: 100,
        discountPrice: 90,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 5,
        quantity: 10,
    },
    {
        id: 17,
        name: "Бананы",
        price: 80,
        discountPrice: 70,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.2,
        quantity: 10,
        },
    {
        id: 18,
        name: "Груши",
        price: 120,
        discountPrice: 100,
        img: "https://ss.sport-express.ru/userfiles/materials/201/2011059/volga.jpg",
        rating: 4.8,
        quantity: 10,
    },
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
