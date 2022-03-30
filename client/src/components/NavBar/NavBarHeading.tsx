import React from "react";
import Logo from "../../assets/logo.png";

function NavBarBrand() {
  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch hover:cursor-pointer	 sm:justify-start mr-10">
      <div className="flex-shrink-0 flex items-center">
        <img
          className="hidden lg:block h-8 w-auto logo-image"
          src={Logo}
          alt="Workflow"
        />
        <img
          className="block lg:hidden h-8 w-auto logo-image"
          src={Logo}
          alt="Workflow"
        />
        <h2 className="font-sans text-2xl text-white tracking-wider	">
          Box Chat
        </h2>
      </div>
    </div>
  );
}

export default NavBarBrand;
