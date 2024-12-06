import React from "react";
import { useCart } from "../pages/CartContext";

const CartPage: React.FC = () => {
  const { cart, products, incrementQuantity, decrementQuantity } = useCart();

  const cartItems = products.filter((product) => cart[product.id]);

  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <div key={product.id}>
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>Цена: {product.discountPrice} ₽</p>
            <div>
              <button onClick={() => decrementQuantity(product.id)}>-</button>
              <span>{cart[product.id]}</span>
              <button onClick={() => incrementQuantity(product.id)}>+</button>
            </div>
          </div>
        ))
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  );
};

export default CartPage;
