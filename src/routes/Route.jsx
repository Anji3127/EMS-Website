import { Routes, Route } from "react-router-dom";
import Home from "../components/Hero/Home";
import AddEmp from "../components/addEmp/AddEmp";
import Login from "../components/login/login";
import Register from "../components/register/Register";
import AboutUs from "../components/aboutUs/AboutUS";
import UpdateEmp from "../components/updateEmp/UpdateEmp";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addEmp" element={<AddEmp />} />
      <Route path="/updateEmp" element={<UpdateEmp />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
