import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const InstallationCart = ({ cart, handleRemove }) => {
  const { image, title, ratingAvg, downloads, size, id } = cart;

  return (
    <div className="flex justify-between items-center bg-white py-2 px-4 rounded">
      <div className="flex gap-3">
        <img className="w-12 h-12 object-cover rounded" src={image} alt="cardImg" />
        <div>
          <h2>{title}</h2>
          <div className="flex gap-3 items-center">
            <p className="flex gap-0.5 items-center text-[#00D390]">
              <IoMdDownload /> <span>{downloads}</span>
            </p>
            <p className="flex gap-0.5 items-center text-[#FF8811]">
              <FaStar /> <span>{ratingAvg}</span>
            </p>
            <p className="text-[#627382]">{size} MB</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleRemove(id)}
        className="bg-[linear-gradient(125deg,#00D390_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallationCart;
