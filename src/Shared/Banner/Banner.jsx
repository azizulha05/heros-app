import React from "react";
import btnGP from "../../assets/fi_16076057.svg";
import btnAS from "../../assets/fi_5977575.svg";
import logoBanner from "../../assets/hero.png";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div>
      <section className="space-y-4 py-4 lg:py-8">
        <h2 className="font-black text-xl md:text-2xl lg:text-4xl lg:w-3/12 lg:mx-auto text-center">
          We Build{" "}
          <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-bold">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-[#627382] lg:w-8/12 mx-auto text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and
          more exciting.Our goal is to turn your ideas into digital experiences that truly make an
          impact.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] rounded w-48">
            <PrimaryButton classes="w-full">
              <img className="w-6 h-6" src={btnGP} alt="btnGP" />
              Google Play
            </PrimaryButton>
          </div>
          <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] rounded w-48">
            <PrimaryButton classes="w-full">
              <img className="w-6 h-6" src={btnAS} alt="btnAS" />
              App Store
            </PrimaryButton>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <img className="h-48 lg:h-80" src={logoBanner} alt="logoBanner" />
      </section>
      <section className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white px-4  py-4 lg:py-8 rounded">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex justify-evenly items-center gap-4 my-6">
          <div className="space-y-2 text-center">
            <p className="text-xs text-[#d5dfe9]">Total Downloads</p>
            <p className="text-4xl font-bold">29.6M</p>
            <p className="text-xs text-[#d5dfe9]">21% more than last month</p>
          </div>
          <div className="space-y-2 text-center">
            <p className="text-xs text-[#d5dfe9]">Total Reviews</p>
            <p className="text-4xl font-bold">906K</p>
            <p className="text-xs text-[#d5dfe9]">46% more than last month</p>
          </div>
          <div className="space-y-2 text-center">
            <p className="text-xs text-[#d5dfe9]">Active Apps</p>
            <p className="text-4xl font-bold">132+</p>
            <p className="text-xs text-[#d5dfe9]">31 more will Launch</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
