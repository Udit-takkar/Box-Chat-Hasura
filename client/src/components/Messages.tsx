import React from "react";
import useUserId from "../hooks/useId";
import Message from "./Room/Message";
import defaultPhoto from "../assets/default_profile.png";
const { v4: uuidv4 } = require("uuid");

interface MessageProp {
  User: {
    email?: string;
    image_url: string | null;
    nft_image_url: string | null;
  };
  content?: string;
  author?: string;
  user_id: string | null;
}
interface MessagesProps {
  messages: MessageProp[];
}

function Messages({ messages }: MessagesProps) {
  const user_id = useUserId();
  return (
    <div className="grid grid-cols-12 gap-y-2">
      {messages
        .slice(0)
        .reverse()
        .map((message: MessageProp) => {
          return (
            <Message
              key={uuidv4()}
              email={message.User.email}
              content={message.content}
              author={message.author}
              user_id={user_id}
              imgSrc={
                message.User?.nft_image_url
                  ? message.User.nft_image_url
                  : message.User?.image_url
                  ? message.User?.image_url
                  : defaultPhoto
              }
              nftUrl={message.User.nft_image_url}
            />
          );
        })}
    </div>
  );
}

export default Messages;
