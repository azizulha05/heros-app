import React from "react";
import { Outlet } from "react-router";
import Footers from "../Shared/Footers/Footers";
import NavBar from "../Shared/Headers/NavBar";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <section className="bg-white px-4 md:px-8 lg:px-14 py-2">
        <NavBar />
      </section>
      <section className="w-11/12 mx-auto my-4">
        <Outlet />
      </section>
      <section className="px-4 md:px-8 lg:px-14 py-10 bg-black">
        <Footers />
      </section>

      <ToastContainer />
    </div>
  );
};

export default MainLayouts;
