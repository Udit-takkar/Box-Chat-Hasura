import React from "react";
import Heading from "../../components/SideBar/Heading";
import ChatRooms from "../../components/SideBar/ChatRooms";
import ChatMembers from "./ChatMembers";
import SideBarContainer from "../../containers/SideBarContainer";

function SideBar() {
  return (
    <SideBarContainer>
      <div className="w-full rounded-xl mx-auto">
        <div className="flex flex-row items-center justify-between text-xs">
          <Heading title="Chat Rooms" />
        </div>
        <ChatRooms />
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between text-xs mt-6">
        <Heading title="Chat Members" />
      </div>
      <ChatMembers />
    </SideBarContainer>
  );
}

export default SideBar;
