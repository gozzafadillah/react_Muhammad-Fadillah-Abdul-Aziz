import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "../components/Form/FormComponent";
import HomePages from "../pages/Home/HomePages";

const SetupRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/pendaftaran" element={<FormComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoute;
