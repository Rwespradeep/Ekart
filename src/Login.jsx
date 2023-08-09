import { Avatar, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { login } from "./UserSlice";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    dispatch(login(user));
    localStorage.setItem("user", JSON.stringify(user));
    const response = await axios.post("/api/v1/users/login", user);

    if (response.status == 200) {
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/Home");
    }
  };

  return (
    <div className="register-page">
      <Avatar
        className="user-avatar"
        sx={{ bgcolor: "#675d50", width: "80px", height: "80px" }}
        src="/broken-image.jpg"
      />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicuserName">
          <Form.Control
            type="text"
            placeholder="Enter UserName"
            onChange={(e) => setuserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="register-button"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
