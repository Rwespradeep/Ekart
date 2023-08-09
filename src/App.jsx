import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import HeroCarousel from "./HeroCarousel";
import Product from "./Product";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" exact Component={Login} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/Home" Component={Home} />
      <Route path="/register/Home" Component={Home} />
      <Route path="/login/Home" Component={Home} />
    </Routes>
  );
}

export default App;
