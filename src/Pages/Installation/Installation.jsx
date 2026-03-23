import React, { useEffect, useState } from "react";
import { getStoreCart, removeFromCart } from "../../Utilities/localstorage";
import { useLoaderData } from "react-router";
import InstallationCart from "./InstallationCart";
import { toast } from "react-toastify";

const Installation = () => {
  const [cartItems, setCartItems] = useState([]);
  const apps = useLoaderData();
  useEffect(() => {
    const cartIds = getStoreCart();
    const items = apps.filter((app) => cartIds.includes(app.id));
    setCartItems(items);
  }, [apps]);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast("Deleted the cart!");
  };
  return (
    <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-4 my-5 pb-4 space-y-4">
      <div className="text-center">
        <h2 className="text-[#001931] font-bold text-xl lg:text-3xl">Your Installed Apps</h2>
        <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between items-center">
        <p>{cartItems.length} Apps Found</p>
        <details className="dropdown">
          <summary className="btn m-1">Sort</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex flex-col gap-4">
        {cartItems.map((cart) => (
          <InstallationCart key={cart.id} cart={cart} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default Installation;
