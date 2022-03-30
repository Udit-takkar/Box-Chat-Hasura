import React from "react";
import Tick from "../assets/Tick";

interface InviteCardProps {
  room_id: number;
  room_name: string;
  email: string;
  invitationId: number;
  handleAcceptInvitation: (invitationId: number, room_id: number) => void;
  handleMarkSeenClick: (invitation_id: number) => void;
}

function InvitationCard({
  room_id,
  room_name,
  email,
  invitationId,
  handleAcceptInvitation,
  handleMarkSeenClick,
}: InviteCardProps) {
  return (
    <div className="flex justify-between text-white bg-gray-800 p-8  rounded-lg mt-6">
      <div className="mr-4">
        <p className="text-2xl font=sans">
          <span className="font-black">Room Name</span> :{" "}
          <span>{room_name}</span>
        </p>
        <p className="font-light text-lg">
          You Have been invited By <span className="font-medium">{email}</span>{" "}
          to join Room <span className="font-medium">{room_name}</span>
        </p>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => handleAcceptInvitation(invitationId, room_id)}
          className="flex bg-gray-700 text-white py-2 px-2 rounded mr-2 "
        >
          <Tick />
          Accept
        </button>
        <button
          onClick={() => handleMarkSeenClick(invitationId)}
          className="bg-white whitespace-nowrap	 text-black py-2 px-2 rounded"
        >
          Mark as seen
        </button>
      </div>
    </div>
  );
}

export default InvitationCard;
