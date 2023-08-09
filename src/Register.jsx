import { Avatar, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { login } from "./UserSlice";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
      role: selectedRole,
    };

    dispatch(login(user));
    const response = await axios.post("/api/v1/users/register", user);

    if (response.status == 200) {
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className="role-radio">
          <Form.Check
            type="radio"
            id={`default-radio`}
            label={`Admin`}
            onChange={handleRadioChange}
            value="ADMIN"
          />
          <Form.Check
            type="radio"
            id={`default-radio`}
            label={`User`}
            onChange={handleRadioChange}
            value="USER"
          />
        </div>

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
          onClick={handleRegister}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
