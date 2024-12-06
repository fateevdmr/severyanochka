export interface Product {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    img: string;
    rating: number;
    quantity?: number;
}