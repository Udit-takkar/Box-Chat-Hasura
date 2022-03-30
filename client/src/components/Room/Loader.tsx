import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
