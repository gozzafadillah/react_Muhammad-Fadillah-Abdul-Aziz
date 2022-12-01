import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPages from "./pages";
import AboutMain from "./pages/Abouts";
import Main from "./pages/Main";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />}>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
