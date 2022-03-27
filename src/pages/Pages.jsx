import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cuisine/:type" exact element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
