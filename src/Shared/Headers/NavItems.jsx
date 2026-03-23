import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { FaAppStore } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";

const NavItems = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "bg-[linear-gradient(125deg,#00D390_5.68%,#9F62F2_88.38%)]" : "bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"} rounded`
        }
      >
        <PrimaryButton classes="w-full">
          <IoHome /> Home
        </PrimaryButton>
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `${isActive ? "bg-[linear-gradient(125deg,#00D390_5.68%,#9F62F2_88.38%)]" : "bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"} rounded `
        }
      >
        <PrimaryButton classes="w-full">
          <FaAppStore /> Apps
        </PrimaryButton>
      </NavLink>
      <NavLink
        to="/install"
        className={({ isActive }) =>
          `${isActive ? "bg-[linear-gradient(125deg,#00D390_5.68%,#9F62F2_88.38%)]" : "bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"} rounded `
        }
      >
        <PrimaryButton classes="w-full">
          <GrInstallOption /> Install
        </PrimaryButton>
      </NavLink>
    </div>
  );
};

export default NavItems;
