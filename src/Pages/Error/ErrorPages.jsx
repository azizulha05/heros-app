import React from "react";
import errorImg from "../../assets/error-404.png";
import { NavLink, useNavigate } from "react-router";
const ErrorPages = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-4 py-5 lg:py-10">
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-10">
        <figure>
          <img src={errorImg} alt="errorImg" />
        </figure>
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-[#001931] text-3xl font-bold">OOPS!! APP NOT FOUND</h2>
            <p className="text-[#627382] text-xs">
              The App you are requesting is not found on our system. please try another apps
            </p>
          </div>
          <NavLink
            onClick={() => navigate(-1)}
            className="bg-[linear-gradient(125deg,#00D390_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white"
          >
            Go Back!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;
