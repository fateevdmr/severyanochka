export interface Product {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    img: string;
    rating: number;
    category: 'stock' | 'newProducts' | 'catalog' | 'dairy' | 'meat' | 'bakery' | 'fruits' | 'drinks' | 'snacks' | 'frozen' | 'grocery' | 'seafood' | 'organic';
    quantity?: number;
}
