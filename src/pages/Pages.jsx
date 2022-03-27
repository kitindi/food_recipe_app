import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:input" element={<Searched />} />
    </Routes>
  );
};

export default Pages;
