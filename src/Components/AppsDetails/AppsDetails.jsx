import React from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { addToStoredCart } from "../../Utilities/localstorage";
import { toast } from "react-toastify";

const AppsDetails = () => {
  const { id } = useParams();
  const strId = parseInt(id);
  const appsData = useLoaderData();
  const singApps = appsData.find((singApp) => singApp.id === strId);
  const { image, title, ratingAvg, downloads, reviews, size, description } = singApps;
  const navigate = useNavigate();
  const handleAddToCart = () => {
    addToStoredCart(singApps.id);
    toast("Added to cart!");
    navigate(-1);
  };

  return (
    <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-2 my-5 space-y-4">
      <div className="flex flex-col items-center md:flex-row gap-8">
        <figure>
          <img className="rounded w-56 h-56" src={image} alt="toDoImg" />
        </figure>
        <section className="flex-1">
          <div className="pb-4">
            <h2 className="text-[#001931] font-bold text-2xl">{title}</h2>
            <p className="text-[#627382]">
              Developed by{" "}
              <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-bold">
                productive.io
              </span>
            </p>
          </div>
          <div className="outline outline-[#00193115]"></div>
          <div className="py-4 flex items-center gap-8">
            <p className="flex flex-col gap-2 items-center text-[#00D390]">
              <IoMdDownload className="text-3xl" />{" "}
              <span className="text-[#627382] text-xs">Downloads</span>{" "}
              <span className="text-[#001931] text-2xl">{downloads}</span>
            </p>
            <p className="flex flex-col gap-2 items-center text-[#FF8811]">
              <FaStar className="text-3xl" />{" "}
              <span className="text-[#627382] text-xs">Average Ratings</span>{" "}
              <span className="text-[#001931] text-2xl">{ratingAvg}</span>
            </p>
            <p className="flex flex-col gap-2 items-center text-[#9F62F2]">
              <FaThumbsUp className="text-3xl" />{" "}
              <span className="text-[#627382] text-xs">Total Reviews</span>{" "}
              <span className="text-[#001931] text-2xl">{reviews}</span>
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold"
          >
            Install Now ({size} MB)
          </button>
        </section>
      </div>
      <div>
        <h2 className="text-[#001931] text-2xl font-bold mb-5">Description</h2>
        <p className="text-[#627382] text-justify">{description}</p>
      </div>
      <div>
        <BarChart width={400} height={300} data={singApps.ratings}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </div>
    </div>
  );
};

export default AppsDetails;
