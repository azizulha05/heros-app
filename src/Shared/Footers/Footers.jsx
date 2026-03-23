import React from "react";
import footerImg from "../../assets/logo.png";
import { Link } from "react-router";
const Footers = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-white">
      <aside className="flex flex-col items-center md:items-start gap-2">
        <figure className="flex gap-1 items-center">
          <img className="h-8 w-8" src={footerImg} alt="footerImg" />
          <Link className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-bold">
            HERO.IO
          </Link>
        </figure>
        <p>Copyright &copy; 2026 - All right reserved</p>
      </aside>
      <nav className="flex flex-col items-center md:items-start gap-2">
        <h6 className="uppercase opacity-60 font-bold">Services</h6>
        <Link className="hover:underline hover:underline-offset-3">Branding</Link>
        <Link className="hover:underline hover:underline-offset-3">Design</Link>
        <Link className="hover:underline hover:underline-offset-3">Marketing</Link>
        <Link className="hover:underline hover:underline-offset-3">Advertisement</Link>
      </nav>
      <nav className="flex flex-col items-center md:items-start gap-2">
        <h6 className="uppercase opacity-60 font-bold">Company</h6>
        <Link className="hover:underline hover:underline-offset-3">About us</Link>
        <Link className="hover:underline hover:underline-offset-3">Contact</Link>
        <Link className="hover:underline hover:underline-offset-3">Jobs</Link>
        <Link className="hover:underline hover:underline-offset-3">Press kit</Link>
      </nav>
      <nav className="flex flex-col items-center md:items-start gap-2">
        <h6 className="uppercase opacity-60 font-bold">Legal</h6>
        <Link className="hover:underline hover:underline-offset-3">Terms of use</Link>
        <Link className="hover:underline hover:underline-offset-3">Privacy policy</Link>
        <Link className="hover:underline hover:underline-offset-3">Cookie policy</Link>
      </nav>
    </footer>
  );
};

export default Footers;
