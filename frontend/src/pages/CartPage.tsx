import React from "react";
import { useCart } from "./CartContext";
import products from "../Data/produce";
import style from "../Styles/cartPage.module.css";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, addToCart } = useCart();

  const cartItems = Object.entries(cart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === Number(id));
      if (product) {
        return { ...product, quantity };
      }
      return null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <div className={style.cartPage}>
      <h1>Корзина</h1>
      {cartItems.length > 0 ? (
        <div className={style.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={style.cartItem}>
              <img src={item.img} alt={item.name} className={style.itemImage} />
              <div className={style.itemDetails}>
                <h3>{item.name}</h3>
                <p>Цена: {item.price} ₽</p>
                <div className={style.quantityControls}>
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  );
};

export default CartPage;
