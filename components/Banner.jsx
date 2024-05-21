"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-screen w-screen bg-[url(/ai1.jpg)] flex justify-center items-center mx-auto ">
      <div className="w-[500px] h-[500px] backdrop-invert-0 bg-white/30 rounded-md flex items-center justify-center">
        <div
          className={`relative rounded-full bg-yellow-400 w-[70px] h-[70px] transition-all duration-300 cursor-pointer flex items-center justify-center`}
          onClick={() => setIsActive(!isActive)}
        >
          <FaPlus className={`absolute rounded-full h-8 w-8 bg-red-600 p-2 z-50 ${isActive ? "rotate-45" : ""}`} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
