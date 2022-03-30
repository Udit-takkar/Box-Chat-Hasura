import React from "react";
import { NavLink } from "react-router-dom";
import { BellIcon } from "@heroicons/react/outline";
import { NavigationProps } from "../../utils/navitems";
import { GetCountSubscription } from "../../graphql/autogen/types";

interface NavItemsProps {
  navigation: NavigationProps[];
  invitaionsData: GetCountSubscription | undefined;
}

function NavItems({ navigation, invitaionsData }: NavItemsProps) {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {navigation.map((item: NavigationProps) => (
          <NavLink
            to={item.href}
            key={item.name}
            isActive={(match, location) => {
              return match?.isExact ? true : false;
            }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
            activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium"
          >
            {item.name === "Invitations" ? (
              <div className="flex">
                <BellIcon className="h-6 w-6" aria-hidden="true" />
                {invitaionsData?.Invitation_aggregate?.aggregate?.count ? (
                  <span className="text-white">
                    ({invitaionsData.Invitation_aggregate.aggregate.count})
                  </span>
                ) : null}
                {item.name}
              </div>
            ) : (
              item.name
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavItems;
