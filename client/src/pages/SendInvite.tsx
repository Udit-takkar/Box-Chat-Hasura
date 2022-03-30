import React, { useState, useMemo } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import validator from "validator";
import useUserId from "../hooks/useId";
import {
  useGetChatRoomsQuery,
  useCreateInvitationMutation,
} from "../graphql/autogen/types";

interface formStateProps {
  email: string;
  room_id: number | null;
}

type Tmp = {
  value: number | null;
  label: string;
};

type RoomObj = {
  Room: {
    id: number;
    name: string;
  };
};

function SendInvite() {
  const user_id = useUserId();

  const [formState, setFormState] = useState<formStateProps>({
    email: "",
    room_id: null,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data } = useGetChatRoomsQuery({
    variables: {
      user_id: user_id,
    },
  });

  const [createInvitation] = useCreateInvitationMutation();

  const options = useMemo(() => {
    const tmp: Tmp[] = [];
    data?.Member?.forEach((roomObj: RoomObj) => {
      const room = roomObj?.Room;
      tmp.push({ value: room.id, label: room.name });
    });

    return tmp;
  }, [data]);

  const handleClick = () => {
    const { room_id, email } = formState;
    if (!room_id) {
      toast.error("Please Select a room", {
        autoClose: 2000,
      });
      return;
    } else if (!validator.isEmail(email)) {
      toast.error("please enter a valid email", {
        autoClose: 2000,
      });
      return;
    }
    setIsLoading(true);

    createInvitation({
      variables: {
        room_id,
        email,
        sender_id: user_id ?? "",
      },
    })
      .then(returnedItems => {
        toast.success("Invitation Sent Successfully", {
          autoClose: 2000,
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="grid place-items-center w-full bg-bkg ">
      <div className="flex flex-col items-center  min-w-1/2  p-4 border-2 text-white bg-gray-800 rounded-lg shadow-2xl">
        <h2 className="bg-gray-700 w-full text-center rounded-lg p-2 font-sans text-2xl font-light tracking-wide	">
          Create an Invitation
        </h2>
        <div className="flex justify-between items-center	w-full mt-4 ">
          <div className="flex-1">
            <h2 className="font-sans">Select Room :</h2>
            <p className="font-light">(Select the room in which to invite)</p>
          </div>

          <Select
            name="room_id"
            onChange={e =>
              setFormState({ ...formState, room_id: e?.value ?? null })
            }
            className="text-black flex-1"
            options={options}
          />
        </div>
        <div className="flex justify-between items-center w-full mt-4	">
          <div className="flex-1">
            <h2 className="font-sans">Email Address :</h2>
            <p className="font-light">( Enter full email adress to invite)</p>
          </div>
          <input
            name="email"
            id="email"
            value={formState.email}
            onChange={e =>
              setFormState({ ...formState, email: e.target.value })
            }
            className="p-2 flex-1 rounded-lg text-black "
          />
        </div>
        <button
          onClick={handleClick}
          disabled={isLoading}
          className="text-black bg-white p-2 rounded-lg mt-4 font-black text-xl w-1/2 mt-8"
        >
          Invite
        </button>
      </div>
    </div>
  );
}

export default SendInvite;
