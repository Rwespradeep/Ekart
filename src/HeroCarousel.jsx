import React from "react";
import { selectUser } from "./UserSlice";
import { useSelector } from "react-redux";

const HeroCarousel = () => {
  const currentUser = useSelector(selectUser);
  return (
    <div className="hero-section">
      <div className="titles-section">
        <h1 className="hero-title">Let's go shopping</h1>
        <br></br>
        <h3 className="hero-name">{currentUser.username}</h3>
      </div>

      <img src="./hero_cover.webp" alt="cover-image" />
    </div>
  );
};

export default HeroCarousel;
