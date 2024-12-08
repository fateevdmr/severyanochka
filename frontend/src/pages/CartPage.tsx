import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../Styles/cartPage.module.css";
import { useCart } from "./CartContext";
import type { Product } from "../types/product";
import CartForm from "../components/CartForm";

interface CartItem extends Product {
  quantity: number;
}

const CartPage: React.FC = () => {
  const { cart, removeFromCart, addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке продуктов:", error);
        setLoading(false);
      });
  }, []);

  const cartItems = Object.entries(cart)
    .map(([id, quantity]): CartItem | null => {
      const product = products.find((item: Product) => item.id === Number(id));
      if (product) {
        return { ...product, quantity };
      }
      return null;
    })
    .filter((item): item is CartItem => item !== null);

  const total = cartItems.reduce(
    (sum, item) => sum + item.discountPrice * item.quantity,
    0
  );

  const handleOrderSubmit = () => {
    setOrderSubmitted(true);
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={style.cartContainer}>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <CartForm totalAmount={total} onOrderSubmit={handleOrderSubmit} />
          <div className={style.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={style.cartItem}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.png'; 
                  }}
                />
                <div className={style.itemInfo}>
                  <h3>{item.name}</h3>
                  <p>{item.discountPrice} ₽</p>
                </div>
                <div className={style.quantity}>
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item.id)}>+</button>
                </div>
                <p className={style.itemTotal}>
                  {item.discountPrice * item.quantity} ₽
                </p>
              </div>
            ))}
          </div>
          <div className={style.cartTotal}>
            <h2>Итого: {total} ₽</h2>
          </div>
        </>
      )}
      {orderSubmitted && (
        <div className={style.orderSuccess}>
          Заказ успешно оформлен!
        </div>
      )}
    </div>
  );
};

export default CartPage;
