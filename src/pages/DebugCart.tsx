import React, { useEffect } from "react";
import { useCart } from "./CartContext";

const DebugCart: React.FC = () => {
  const { cart, favorites } = useCart();

  useEffect(() => {
    console.log("Текущее состояние корзины:", cart);
    console.log("Текущее состояние избранного:", favorites);
  }, [cart, favorites]);

  return null;
};

export default DebugCart;
