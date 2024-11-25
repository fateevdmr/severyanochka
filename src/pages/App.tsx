import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "../Styles/app.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "../components/About";
import Contacts from "../components/Contakts";
import Vacancies from "../components/Vacancies";
import { CartProvider } from "./CartContext";
import CartPage from "./CartPage";
import FavoritesPage from "./FavoritesPage";
import DebugCart from "./DebugCart";

function App() {
  return (
    <CartProvider>
      <DebugCart />
      <div className={style.appContainer}>
        <Header />
        <div className={style.contentWrapper}>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/vacancies" element={<Vacancies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
