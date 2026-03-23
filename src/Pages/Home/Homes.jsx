import React from "react";
import Banner from "../../Shared/Banner/Banner";
import { useLoaderData, useNavigate, useNavigation } from "react-router";
import Loading from "../../Components/Loading/Loading";
import CardsItem from "../../Components/CardsItem/CardsItem";

const Homes = () => {
  const loadData = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading />;
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section className="my-5">
        <div className="py-6">
          <div className="space-y-2 mb-4">
            <h2 className="text-[#001931] text-3xl font-bold text-center">Trending Apps</h2>
            <p className="text-[#627382] text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="space-y-3">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
              {loadData.slice(0, 8).map((appItem) => (
                <CardsItem key={appItem.id} appItem={appItem} />
              ))}
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => navigate("/apps")}
                className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white"
              >
                Show All
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homes;
