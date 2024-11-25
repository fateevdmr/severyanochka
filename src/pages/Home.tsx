import React, { useState } from "react";
import Catalog from "./Catalog";
import Produkts from "./Produkts";
import SpecialOffersMap from "./SpecialOffers";
import MapComponent from "./MapComponent";

const Home: React.FC = () => {
  return (
    <>
      <Catalog />
      <Produkts />
      <SpecialOffersMap />
      <MapComponent />
    </>
  );
};

export default Home;
