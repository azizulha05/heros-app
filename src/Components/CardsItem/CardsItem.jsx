import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { NavLink } from "react-router";

const CardsItem = ({ appItem }) => {
  const { image, title, ratingAvg, downloads, id } = appItem;
  return (
    <div>
      <NavLink to={`/appDetails/${id}`}>
        <div className="bg-white p-3 rounded space-y-2">
          <figure className="bg-gray-100 p-4 rounded flex justify-center items-center">
            <img className="h-36 w-36 object-cover rounded-full" src={image} alt="card img" />
          </figure>
          <div>
            <h2 className="text-[#001931] font-semibold">{title}</h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex gap-0.5 items-center text-[#00D390]">
              <IoMdDownload /> <span>{downloads}</span>
            </p>
            <p className="flex gap-0.5 items-center text-[#FF8811]">
              <FaStar /> <span>{ratingAvg}</span>
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CardsItem;
