import React, { useEffect, useRef } from "react";
import { Productstate } from "./ProductsContext";
import ProductStacks from "./ProductStacks";
import "./App.css";
const Product = () => {
  const {
    products,
    setProducts,
    handleProducts,
    handleHandmadeProducts,
    handleelectronicProducts,
    handleLuxuryProducts,
    electronicProducts,
    handMadeProducts,
    LuxryProducts,
  } = Productstate();

  useEffect(() => {
    setTimeout(() => {
      handleProducts();
      handleelectronicProducts();
      handleHandmadeProducts();
      handleLuxuryProducts();
    }, 2000);
  }, []);

  return (
    <div className="products-jsx-div">
      <h2 className="category-heading">All Products</h2>
      <ProductStacks productsRack={products} />

      {/* <h2 className="category-heading">Electronic Products</h2>
      <ProductStacks productsRack={electronicProducts} />

      <h2 className="category-heading">HandMade Products</h2>
      <ProductStacks productsRack={handMadeProducts} />

      <h2 className="category-heading">Luxury Products</h2>
      <ProductStacks productsRack={LuxryProducts} /> */}
    </div>
  );
};

export default Product;
