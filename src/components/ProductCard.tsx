import React from "react";
import { CiHeart } from "react-icons/ci";
import { useCart } from "../pages/CartContext";
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    favorites,
    cart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  } = useCart();

  const isFavorite = favorites.includes(product.id);
  const cartCount = cart[product.id] || 0;

  return (
    <div className={styles.productCard}>
      <img
        src={product.img}
        alt={product.name}
        className={styles.productImage}
      />

      <div className={styles.priceAndFavorite}>
        <p className={styles.price}>{product.price} ₽</p>
        <CiHeart
          size={24}
          color={isFavorite ? "red" : "black"}
          onClick={() =>
            isFavorite
              ? removeFromFavorites(product.id)
              : addToFavorites(product.id)
          }
          className={styles.favoriteIcon}
        />
      </div>

      <p className={styles.productName}>{product.name}</p>

      <div className={styles.rating}>
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={
              index < product.rating ? styles.starFilled : styles.starEmpty
            }
          >
            ★
          </span>
        ))}
      </div>

      <div className={styles.cartControls}>
        {cartCount > 0 ? (
          <>
            <button
              onClick={() => removeFromCart(product.id)}
              className={styles.cartButton}
            >
              -
            </button>
            <span className={styles.cartCount}>{cartCount}</span>
            <button
              onClick={() => addToCart(product.id)}
              className={styles.cartButton}
            >
              +
            </button>
          </>
        ) : (
          <button
            onClick={() => addToCart(product.id)}
            className={styles.addToCartButton}
          >
            В корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
