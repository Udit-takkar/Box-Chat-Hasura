import { Disclosure } from "@headlessui/react";
import useUserId from "../../hooks/useId";
import navigation from "../../utils/navitems";
import NavItems from "./NavItems";
import UserProfileMenu from "./ProfileMenu";
import NavBarHeading from "./NavBarHeading";
import NavMobileMenuButton from "./NavMobileMenuButton";
import NavMobilePanel from "./NavMobilePanel";
import NavBarContainer from "../../containers/NavBarContainer";
import {
  useGetUserPhotoQuery,
  useGetCountSubscription,
} from "../../graphql/autogen/types";

export default function NavBar() {
  const user_id: string | null = useUserId();

  const { data: photoData } = useGetUserPhotoQuery({
    variables: { user_id: user_id ?? "" },
  });

  const { data: invitaionsData } = useGetCountSubscription({
    variables: {
      user_id: user_id ?? "",
    },
    fetchPolicy: "cache-first",
  });

  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      {({ open }) => (
        <>
          <NavBarContainer>
            <NavMobileMenuButton open={open} />
            <NavBarHeading />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <NavItems
                invitaionsData={invitaionsData}
                navigation={navigation}
              />
              <UserProfileMenu photo={photoData} />
            </div>
          </NavBarContainer>
          <NavMobilePanel navigation={navigation} />
        </>
      )}
    </Disclosure>
  );
}
