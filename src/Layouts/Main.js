import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import { Footer } from "../component/Footer/Footer";

const Main = () => {
  return (
    <div className="">
      <Nav></Nav>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
