import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../Styles/catalog.module.css";

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

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Не удалось загрузить продукты");
        setLoading(false);
      });
  }, []);

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const incrementQuantity = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const decrementQuantity = (productId: number) => {
    setCart((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.sectionTitle}>Каталог продуктов</div>
      <div className={style.productsContainer}>
        {products.map((product) => (
          <div key={product.id} className={style.productCard}>
            <div className={style.favoriteButton}>❤️</div>
            <img
              src={product.img || "placeholder.jpg"}
              alt={product.name}
              className={style.productImage}
            />
            <h3 className={style.productName}>{product.name}</h3>
            <div className={style.productPrice}>
              <span className={style.discountPrice}>
                {product.discountPrice} ₽
              </span>
              <span className={style.price}>{product.price} ₽</span>
            </div>
            <div className={style.productRating}>
              Рейтинг: {product.rating}⭐
            </div>
            {cart[product.id] ? (
              <div className={style.cartControls}>
                <button
                  className={style.decrementButton}
                  onClick={() => decrementQuantity(product.id)}
                >
                  -
                </button>
                <span className={style.quantity}>{cart[product.id]}</span>
                <button
                  className={style.incrementButton}
                  onClick={() => incrementQuantity(product.id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className={style.addToCartButton}
                onClick={() => addToCart(product.id)}
              >
                В корзину
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

