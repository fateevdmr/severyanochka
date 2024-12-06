import React from "react";
import { useCart } from "../pages/CartContext";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { incrementQuantity, decrementQuantity, cart } = useCart();

  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.discountPrice} ₽</p>
      <div>
        <button onClick={() => decrementQuantity(product.id)}>-</button>
        <span>{cart[product.id] || 0}</span>
        <button onClick={() => incrementQuantity(product.id)}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
