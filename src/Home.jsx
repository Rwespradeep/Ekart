import React from "react";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import HeroCarousel from "./HeroCarousel";
import Product from "./Product";

const Home = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="home">
      <PrimarySearchAppBar />
      <HeroCarousel />
      <Product />
    </div>
  );
};

export default Home;
