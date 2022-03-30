import React, { useEffect, useState, useRef, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Messages from "../components/Messages";
import { LIMIT } from "../utils/constants";
import {
  GET_ALL_MESSAGES_CHAT_ROOM,
  MESSAGES_SUBSCRIPTION,
} from "../graphql/queries";
import { scrollToBottom } from "../utils/scrollBottom.js";
import { useOnScreen } from "../hooks/useOnScreen";
import useUserId from "../hooks/useId";
import RoomContainer from "../containers/RoomContainer";
import MessageInput from "../components/Room/Input";
import SendMessageBtn from "../components/Room/Send";
import Loader from "../components/Room/Loader";
import { useSendMessageMutation } from "../graphql/autogen/types";
import { toast } from "react-toastify";
export interface MatchParams {
  id?: string;
}
interface ParamTypes {
  id: string;
}
let isScrolledToBottom = false;

function Room() {
  let { id } = useParams<ParamTypes>();
  const user_id = useUserId();

  const moreRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef<Number>(0);

  const onScreen = useOnScreen(moreRef);

  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const maxPages = useMemo(() => {
    const pages = Math.ceil(count / LIMIT) || 0;
    return pages;
  }, [count]);

  const sendMessage = useSendMessageMutation();

  const { data, loading, fetchMore, subscribeToMore } = useQuery(
    GET_ALL_MESSAGES_CHAT_ROOM,
    {
      variables: {
        room_id: parseInt(id),
        limit: LIMIT,
        offset: 0,
      },
      // notifyOnNetworkStatusChange: true,
      notifyOnNetworkStatusChange: true,
      nextFetchPolicy: "cache-first",
      fetchPolicy: "network-only",

      onCompleted() {
        if (!isFetchingMore && !isScrolledToBottom) {
          window.setTimeout(() => {
            scrollToBottom(bodyRef?.current);
            isScrolledToBottom = true;
            setCount(data?.Room[0]?.Messages_aggregate?.aggregate?.count ?? 0);
          }, 10);
        }
      },
    }
  );

  useEffect(() => {
    subscribeToMore({
      variables: { room_id: id, limit: LIMIT },
      document: MESSAGES_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        const Room = subscriptionData.data.Room[0];
        const cnt = Room?.Messages_aggregate?.aggregate?.count;
        setCount(cnt ?? 0);
        window.setTimeout(() => {
          scrollToBottom(bodyRef?.current);
        }, 50);
      },
    });
  }, [id]);

  useEffect(() => {
    if (onScreen && !isFetchingMore && !loading && page <= maxPages) {
      if (bodyRef && bodyRef.current) {
        scrollPosition.current =
          bodyRef.current.scrollHeight - bodyRef.current.scrollTop;
      }

      setIsFetchingMore(true);
      const offset = LIMIT + (page - 1) * LIMIT;

      fetchMore({
        variables: { offset: offset },
      }).then(fetchedItems => {
        if (fetchedItems?.data) {
          setPage(page => page + 1);
        }
      });

      setIsFetchingMore(false);
    }
  }, [onScreen]);

  useEffect(() => {
    // Retains the scroll position
    if (bodyRef && bodyRef.current) {
      bodyRef.current.scrollTop =
        bodyRef.current.scrollHeight - Number(scrollPosition.current);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const send = sendMessage[0];
    send({
      variables: {
        content: message,
        author: user_id,
        room_id: parseInt(id),
      },
    })
      .then(value => {
        // console.log(value);
        setMessage("");
      })
      .catch(err => {
        toast.error("Something went wrong", {
          autoClose: 2000,
        });
        console.log(err);
      });
  };

  return (
    <RoomContainer>
      <div ref={bodyRef} className="flex flex-col h-full overflow-x-auto mb-4">
        <div ref={moreRef} className="h-16">
          {loading ? <Loader /> : null}
        </div>
        <div className="flex flex-col h-full">
          <Messages messages={data?.Room[0]?.Messages || []} />
        </div>
      </div>
      <div className="flex flex-row items-center h-16  rounded-xl bg-gray-800 w-full px-4">
        <MessageInput message={message} handleChange={handleChange} />
        <SendMessageBtn handleSendMessage={handleSendMessage} />
      </div>
    </RoomContainer>
  );
}

export default Room;
