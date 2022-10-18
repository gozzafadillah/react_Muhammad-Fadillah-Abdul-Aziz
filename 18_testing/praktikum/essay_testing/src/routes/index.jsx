import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NameForm from "../pages/FormCoding";
import Search from "../pages/Search";

const SettingRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/form" element={<NameForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SettingRoute;
