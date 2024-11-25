export interface Product {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    img: string;
    rating: number;
    isNew: boolean;
    quantity?: number;
}
