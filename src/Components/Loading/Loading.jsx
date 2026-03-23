import React from "react";
import loadingImg from "../../assets/logo.png";
const Loading = () => {
  return (
    <div className="h-screen flex justify-center">
      <h2 className="flex items-center gap-4 justify-self-auto">
        Loading
        <span>
          <img className="w-12 h-12 animate-spin" src={loadingImg} alt="loadingImg" />
        </span>
        Data
      </h2>
    </div>
  );
};

export default Loading;
