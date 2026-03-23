import React from "react";
import { FiMenu } from "react-icons/fi";
import NavItems from "./NavItems";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import ComImg from "../../assets/fi_2111432.svg";
import NavImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden">
            <FiMenu className="text-2xl" />
          </div>
          <ul tabIndex="-1" className="dropdown-content bg-[#F5F5F5] rounded z-1 mt-3 w-36 p-2">
            <NavItems />
          </ul>
        </div>
        <Link to="/" className="flex gap-1 items-center">
          <img className="w-8 h-8" src={NavImg} alt="NavImg" />
          <h2 className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-bold">
            HERO.IO
          </h2>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul>
          <NavItems />
        </ul>
      </div>
      <NavLink to="https://github.com/azizulha05/heros-app">
        <PrimaryButton classes="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]">
          <img src={ComImg} alt="ComImg" />
          Contribute
        </PrimaryButton>
      </NavLink>
    </div>
  );
};

export default NavBar;
