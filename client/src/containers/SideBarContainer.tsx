import React from "react";

function SideBarContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col  py-2 pl-3 pr-2 w-64 bg-gray-800 flex-shrink-0 border-t border-r border-gray-600">
      <div className="flex flex-col mt-8 ">{children}</div>
    </div>
  );
}

export default SideBarContainer;
