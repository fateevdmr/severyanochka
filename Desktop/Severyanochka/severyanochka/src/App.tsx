import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/index.css';
import './index.tsx';gir
import Header from './pages/header';
import Produkts from './pages/produkts';
import SpecialOffersMap from './pages/specialOffersMap';
import Footer from './pages/footer';


function App() {
  return (
    <>
    <Header /> 
    <Produkts />
    <SpecialOffersMap />
    <Footer />
    </>
  );
}

export default App;
