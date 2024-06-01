import React from "react";

const AnimatedPulse = () => {
  return (
    <div>
      <div className="relative">
        {/* this is for animation logo start here */}
        <div className="flex items-center justify-center mt-[-70px] mb-5 ">
          <div className="bg-pink-500 w-14 h-14 rounded-full flex items-center justify-center gap-1">
            <div className="w-1 h-2 bg-pink-400 rounded-full animate-wavey "></div>
            <div className="w-1 h-3 bg-pink-200 rounded-full animate-wavey "></div>
            <div className="w-1 h-4 bg-pink-100 rounded-full animate-wavey "></div>
            <div className="w-1 h-3 bg-pink-200 rounded-full animate-wavey "></div>
            <div className="w-1 h-2 bg-pink-400 rounded-full animate-wavey "></div>
          </div>
        </div>
        {/* this is for animation logo end here */}
      </div>
    </div>
  );
};

export default AnimatedPulse;
