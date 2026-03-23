import React from "react";

const PrimaryButton = ({ handler, classes, children }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-[#a5f1d9] px-2 lg:px-4 py-1 text-white text-xl rounded flex justify-center gap-1 items-center ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
