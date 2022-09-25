import React from "react";
import { Container } from "react-bootstrap";
import NavbarUtility from "../../utility/Navbar/NavbarUtility";
import Home from "./Home";

const HomePages = () => {
  return (
    <>
      <NavbarUtility />
      <Container>
        <Home />
      </Container>
    </>
  );
};

export default HomePages;
