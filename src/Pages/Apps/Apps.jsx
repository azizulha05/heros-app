import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData, useNavigation } from "react-router";
import ErrorNotFound from "../Error/ErrorNotFound";
import Loading from "../../Components/Loading/Loading";
import CardsItem from "../../Components/CardsItem/CardsItem";

const Apps = () => {
  const loadAppData = useLoaderData();
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const filteredApps = loadAppData.filter((appItem) =>
    appItem.title.toLowerCase().includes(search.toLowerCase()),
  );
  if (navigation.state === "loading") return <Loading />;
  return (
    <div>
      <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-4 my-5 pb-4 space-y-4">
        <div className="text-center">
          <h2 className="text-[#001931] font-bold text-xl lg:text-3xl">Our All Applications</h2>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p>({loadAppData.length}) Apps Found</p>
          <label className="input text-[#627382]">
            <CiSearch />
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="search Apps"
            />
          </label>
        </div>
        {filteredApps.length === 0 ? (
          <ErrorNotFound setSearch={setSearch} />
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {filteredApps.map((appItem) => (
              <CardsItem key={appItem.id} appItem={appItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
