import { createContext, useContext, useState } from "react";
import axios from "./axios";

export const Products = createContext();

const Context = ({ children }) => {
  /**get products here from server */
  const [products, setProducts] = useState([]);
  const [electronicProducts, setelectronicProducts] = useState([]);
  const [handMadeProducts, setHandmadeProducts] = useState([]);
  const [LuxryProducts, setLuxryProducts] = useState([]);

  const [cartitems, setCartItems] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const [deleteitemCart, setdeleteItemcart] = useState({});
  const handleProducts = async () => {
    try {
      const response = await axios.get("/api/v1/ecommerce/products");
      setProducts(response.data.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const handleelectronicProducts = async () => {
    try {
      const response = await axios.get(
        "/api/v1/ecommerce/products/category/64c20d3d792f90c9f7e81e79"
      );
      setelectronicProducts(response.data.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const handleHandmadeProducts = async () => {
    try {
      const response = await axios.get(
        "/api/v1/ecommerce/products/category/64c20d3d792f90c9f7e81e82"
      );
      setHandmadeProducts(response.data.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLuxuryProducts = async () => {
    try {
      const response = await axios.get(
        "/api/v1/ecommerce/products/category/64c20d3d792f90c9f7e81e89"
      );
      setLuxryProducts(response.data.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddingCart = async (prod) => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const requestBody = {
      quantity: 1,
    };
    try {
      const response = await axios.post(
        `/api/v1/ecommerce/cart/item/${prod}`,
        requestBody,
        config
      );
      setCartItems(response.data.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletingCart = async (prod) => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.delete(
        `/api/v1/ecommerce/cart/item/${prod}`,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getCart = async () => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get("/api/v1/ecommerce/cart", config);
      setUserCart(response.data.data.items);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Products.Provider
      value={{
        products,
        setProducts,
        handleProducts,
        electronicProducts,
        handMadeProducts,
        LuxryProducts,
        handleHandmadeProducts,
        handleelectronicProducts,
        handleLuxuryProducts,
        handleAddingCart,
        cartitems,
        setCartItems,
        getCart,
        userCart,
        setUserCart,
        handleDeletingCart,
      }}
    >
      {children}
    </Products.Provider>
  );
};

export default Context;

export const Productstate = () => {
  return useContext(Products);
};
