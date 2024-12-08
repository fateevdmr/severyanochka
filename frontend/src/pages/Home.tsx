import React, { useState } from "react";
import Banner from "./Banner";
import ProductsMain from "./ProductsMain";
import SpecialOffersMap from "./SpecialOffers";
import MapComponent from "./MapComponent";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <ProductsMain />
      <SpecialOffersMap />
      <MapComponent />
    </>
  );
};

export default Home;
