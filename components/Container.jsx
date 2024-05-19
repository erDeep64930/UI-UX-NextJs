import React from "react";



const Container = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-white/[7%] flex flex-col">
      {children}
    </div>
  );
};

export default Container;
