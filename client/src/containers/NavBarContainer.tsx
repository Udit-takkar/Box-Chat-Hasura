import React from "react";

function NavBarContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-8xl mx-auto px-2 ">
      <div className="relative flex items-center justify-between h-16">
        {children}
      </div>
    </div>
  );
}

export default NavBarContainer;
