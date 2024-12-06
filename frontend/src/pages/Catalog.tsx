import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import style from "../Styles/catalog.module.css";
import { useCart } from '../pages/CartContext';

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  img: string;
  rating: number;
  isNew: boolean;
}

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { cart, favorites, addToCart, incrementQuantity, decrementQuantity, toggleFavorite } =
    useCart();

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
            <div
              className={`${style.favoriteButton} ${
                favorites.includes(product.id) ? style.favoriteActive : ""
              }`}
              onClick={() => toggleFavorite(product.id)}
            >
              <CiHeart />
            </div>
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
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
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

