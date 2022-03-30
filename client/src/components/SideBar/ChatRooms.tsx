import React, { useEffect, useState } from "react";
import GroupIcon from "../../components/GroupIcon";
import { Link } from "react-router-dom";
import useUserId from "../../hooks/useId";
import { useGetChatRoomsQuery } from "../../graphql/autogen/types";
import { useRouteMatch } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");

type Member = {
  Room: {
    id: number;
    name: string;
  };
};

export interface MatchParams {
  id?: string;
}

function ChatRooms() {
  let match = useRouteMatch<MatchParams | undefined>("/room/:id");
  const [roomId, setActiveRoomId] = useState<string>("");

  useEffect(() => {
    if (match?.params?.id) {
      setActiveRoomId(match?.params?.id);
    }
  }, [match]);

  const user_id = useUserId();
  const { data, loading } = useGetChatRoomsQuery({
    variables: {
      user_id,
    },
    pollInterval: 2000,
    fetchPolicy: "network-only",
  });

  return (
    <div className="flex flex-col space-y-1 mt-4 mx-2 h-48 overflow-y-auto scrollbar">
      {!loading
        ? data?.Member.map((member: Member) => {
            return (
              <Link key={uuidv4()} to={`/room/${member.Room.id}`}>
                <div
                  key={uuidv4()}
                  className={
                    "flex flex-row items-center hover:bg-gray-700 rounded-xl p-2" +
                    (match?.isExact && member.Room.id === parseInt(roomId)
                      ? " bg-gray-700"
                      : "")
                  }
                >
                  <GroupIcon />
                  <div className="ml-2 text-sm font-semibold text-gray-400">
                    {member.Room.name}
                  </div>
                </div>
              </Link>
            );
          })
        : "Loding"}
    </div>
  );
}

export default ChatRooms;
