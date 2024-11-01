import React from "react";
import Header from "../pages/header";
import Catalog from '../pages/catalog'
import Gallery from "../components/gallery";
import Produkts from "../pages/produkts";
import SpecialOffersMap from "../pages/specialOffersMap";

const Home: React.FC = () => (
  <>
   <Catalog />  <Gallery />
    <Produkts /> <SpecialOffersMap />
  </>
);

export default Home;
