import React from "react";
import { Menu, Transition } from "@headlessui/react";
import defaultPhoto from "../../assets/default_profile.png";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function ProfileMenu({ photo }: any) {
  const { authLogout } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("token");
    authLogout();
    logout({
      returnTo: window.location.origin,
    });
  };
  const { logout } = useAuth0();

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>

          {photo?.User_by_pk?.nft_image_url ? (
            <div className="hex">
              <div className="hex-background">
                <img
                  alt=""
                  src={
                    photo?.User_by_pk?.nft_image_url
                      ? photo.User_by_pk.nft_image_url
                      : photo?.User_by_pk?.image_url
                      ? photo?.User_by_pk?.image_url
                      : defaultPhoto
                  }
                />
              </div>
            </div>
          ) : (
            <img
              className="h-8 w-8 rounded-full"
              src={
                photo?.User_by_pk?.nft_image_url
                  ? photo.User_by_pk.nft_image_url
                  : photo?.User_by_pk?.image_url
                  ? photo?.User_by_pk?.image_url
                  : defaultPhoto
              }
              alt=""
            />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-20	origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <NavLink
                to="/profile"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Your Profile
              </NavLink>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <button
                onClick={handleLogout}
                className={classNames(
                  active ? "bg-gray-100 w-full text-left" : "",
                  "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                )}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ProfileMenu;
