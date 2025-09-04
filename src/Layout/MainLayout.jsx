import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="mx-auto min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
