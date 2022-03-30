import React, { useEffect, useState } from "react";
import ChatMemberIcon from "../../assets/ChatMembersIcon";
import { useRouteMatch } from "react-router-dom";
import { useGetChatRoomMembersSubscription } from "../../graphql/autogen/types";

const { v4: uuidv4 } = require("uuid");

export interface MatchParams {
  id?: string;
}
export interface memberProps {
  User: {
    email: string;
  };
}
function ChatMembers() {
  let match = useRouteMatch<MatchParams | undefined>("/room/:id");
  const [id, setId] = useState<string>("");

  const { data } = useGetChatRoomMembersSubscription({
    variables: { room_id: parseInt(id) },
  });

  useEffect(() => {
    if (match?.params?.id) {
      setId(match.params.id);
    }
  }, [match]);

  return (
    <div className="flex flex-col overflow-y-auto h-96 space-y-1 mt-4 mx-2 scrollbar">
      {match?.isExact
        ? data?.Member.map((member: memberProps) => {
            return (
              <div
                key={uuidv4()}
                className="flex flex-row items-center cursor-auto rounded-xl p-2"
              >
                <ChatMemberIcon />
                <div className="ml-2 text-sm font-semibold text-gray-400 ">
                  {member.User.email}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ChatMembers;
