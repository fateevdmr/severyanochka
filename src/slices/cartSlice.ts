import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingProduct = state.items.find((item) => item.id === action.payload.id);
      if (!existingProduct) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        existingProduct.quantity! += 1;
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity! += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product && product.quantity! > 1) {
        product.quantity! -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
