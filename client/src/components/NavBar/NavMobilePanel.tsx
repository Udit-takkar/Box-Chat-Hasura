import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { NavigationProps } from "../../utils/navitems";

interface NavMobilePanelProps {
  navigation: NavigationProps[];
}
function NavMobilePanel({ navigation }: NavMobilePanelProps) {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item: NavigationProps) => (
          <NavLink
            key={item.name}
            to={item.href}
            isActive={match => {
              return match?.isExact ? true : false;
            }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </Disclosure.Panel>
  );
}

export default NavMobilePanel;
