import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import AboutPages from "../pages/About/AboutPages";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import ProfilePages from "../pages/Profile/ProfilePages";
import TodoPages from "../pages/Todo/TodoPages";

const ConfigRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoPages />} />
          <Route path="/about/about-app" element={<AboutPages />} />
          <Route path="/about/about-author/:name" element={<ProfilePages />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRoutes;
