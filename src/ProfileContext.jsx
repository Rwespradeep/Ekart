import { createContext, useContext, useState } from "react";
import axios from "./axios";

export const Profile = createContext();

const ProfileContext = ({ children }) => {
  const [myProfile, setmyProfile] = useState({});
  const token = localStorage.getItem("accessToken");

  const getMyProfile = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get("/api/v1/ecommerce/profile", config);
    setmyProfile(response.data);
    console.log(myProfile);
  };

  const createAddress = async (address) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        "/api/v1/ecommerce/addresses",
        address,
        config
      );
      console.log(response);
      const addressid = response.data.data._id;
      localStorage.setItem("addressToken", addressid);
    } catch (err) {
      console.log(err);
    }
  };

  const getAddress = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const addressId = localStorage.getItem("addressToken");
    try {
      const response = await axios.get(
        `/api/v1/ecommerce/addresses/${addressId}`,
        config
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Profile.Provider
      value={{
        myProfile,
        setmyProfile,
        getMyProfile,
        createAddress,
        getAddress,
      }}
    >
      {children}
    </Profile.Provider>
  );
};

export default ProfileContext;

export const ProfileState = () => {
  return useContext(Profile);
};
