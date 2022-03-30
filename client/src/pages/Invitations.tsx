import React, { useState } from "react";
import { toast } from "react-toastify";
import InvitationCard from "../components/InvitationCard";
import { GET_INVITATION_BY_ID, GET_CHAT_ROOMS } from "../graphql/queries";
import { useHistory } from "react-router-dom";
import useUserId from "../hooks/useId";
import NotificationImg from "../assets/no_invite.jpg";
import {
  useGetInvitationByIdQuery,
  useAcceptMutation,
  useDelMutation,
} from "../graphql/autogen/types";

interface Invite {
  id: number;
  Room: {
    id: number;
    name: string;
  };
  User: {
    email: string;
  };
}

function Invitations() {
  const user_id = useUserId();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data, loading } = useGetInvitationByIdQuery({
    variables: {
      user_id: user_id ?? "",
    },
    notifyOnNetworkStatusChange: true,
    nextFetchPolicy: "cache-first",
    fetchPolicy: "network-only",
  });
  const [acceptInvitation] = useAcceptMutation({
    refetchQueries: [
      GET_INVITATION_BY_ID,
      GET_CHAT_ROOMS,
      "getInvitationById",
      "getChatRooms",
    ],
  });
  const [markSeenInvitation] = useDelMutation({
    refetchQueries: [GET_INVITATION_BY_ID, "getInvitationById"],
  });

  const handleAcceptInvitation = async (
    invitationId: number,
    room_id: number
  ) => {
    setIsLoading(true);
    try {
      const res = await acceptInvitation({
        variables: {
          invitation_id: invitationId,
          room_id,
          user_id: user_id ?? "",
        },
      });
      history.push(`/room/${room_id}`);
      toast.success("Successfully accepted Invitation", {
        autoClose: 2000,
      });
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong", {
        autoClose: 2000,
      });
    }
    setIsLoading(false);
  };

  const handleMarkSeenClick = async (invitation_id: number) => {
    setIsLoading(true);
    try {
      const res = await markSeenInvitation({ variables: { invitation_id } });
      toast.success("Invitation removed successfully", {
        autoClose: 2000,
      });
    } catch (e) {
      console.log(e);
      toast.error("Something Went Wrong", {
        autoClose: 2000,
      });
    }
    setIsLoading(false);
  };
  console.log(data);
  return (
    <div className="grid justify-items-center  bg-gray-100	 w-full">
      <div className="flex flex-col text-white overflow-y-hidden mt-8 w-3/4 max-w-3/4 ">
        <h2 className="font-black text-white text-4xl tracking-wide bg-gray-800 p-6  rounded-lg">
          Invitations
        </h2>
        {loading ? (
          <div className="flex items-center justify-center ">
            <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        ) : data?.Invitation?.length === 0 ? (
          <div className="bg-gray-800 h-3/5 max-h-3/5 mt-8 rounded-lg">
            <h2 className="font-black text-3xl mt-8 text-center">
              You Have No Unresolved Invitations
            </h2>
            <div className="h-full">
              <img
                src={NotificationImg}
                className="mb-8 mt-4 h-full w-full"
                alt="no invitation"
              />
            </div>
          </div>
        ) : (
          <div className="overflow-y-scroll ">
            {data?.Invitation?.map((invite: Invite) => {
              return (
                <InvitationCard
                  key={invite.id}
                  room_id={invite.Room.id}
                  room_name={invite.Room.name}
                  email={invite.User.email}
                  invitationId={invite.id}
                  handleAcceptInvitation={handleAcceptInvitation}
                  handleMarkSeenClick={handleMarkSeenClick}
                />
              );
            })}
            {isLoading ? (
              <div className="flex items-center justify-center ">
                <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin"></div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default Invitations;
