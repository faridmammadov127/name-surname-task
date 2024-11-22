import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Wishlist from "../Wishlist/Wishlist";
import SignupForm from "../Signup/SignupForm";
import Cart from "../Cart/Cart";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<SignupForm/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;