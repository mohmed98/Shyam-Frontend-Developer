import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <div className="loader w-fit p-2 rounded-full flex space-x-3">
        <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
