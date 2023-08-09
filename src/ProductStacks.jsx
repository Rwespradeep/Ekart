import React, { useRef } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Stack from "@mui/material/Stack";
import ActionAreaCard from "./ActionAreaCard";
import "./App.css";

const ProductStacks = ({ productsRack }) => {
  const productContainerref = useRef(null);

  const handleScrollRight = () => {
    productContainerref.current.scrollBy({
      left: 300,
      behaviour: "smooth",
    });
  };

  const handleScrollLeft = () => {
    productContainerref.current.scrollBy({
      left: -300,
      behaviour: "smooth",
    });
  };
  return (
    <div className="product-parent" ref={productContainerref}>
      <Stack direction="row" spacing={4} className="products-stack">
        {productsRack.map((eachProd, index) => (
          <ActionAreaCard key={index} prodData={eachProd} />
        ))}
      </Stack>
      <ArrowBackIosOutlinedIcon
        className="left-arrow"
        onClick={handleScrollLeft}
      />
      <ArrowForwardIosOutlinedIcon
        className="right-arrow"
        onClick={handleScrollRight}
      />
    </div>
  );
};

export default ProductStacks;
