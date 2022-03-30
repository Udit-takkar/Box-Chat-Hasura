import React from "react";

function Message({
  author,
  user_id,
  content,
  email,
  imgSrc,
  nftUrl,
}: {
  author?: string;
  user_id: string | null;
  content?: string;
  email?: string;
  imgSrc: any;
  nftUrl: string | null;
}) {
  return (
    <div
      className={
        author === user_id
          ? "col-start-6 col-end-13 p-3 rounded-lg"
          : "col-start-1 col-end-8 p-3 rounded-lg"
      }
    >
      <div
        className={
          author === user_id
            ? "flex items-center justify-start flex-row-reverse"
            : "flex flex-row items-center"
        }
      >
        {/* {nftUrl ? (
          <div
            className="hex flex-shrink-0"
            style={{ width: "30px", height: "30px" }}
          >
            <div
              className="hex-background"
              style={{ width: "30px", height: "30px" }}
            >
              <img src={imgSrc} alt="main" />
            </div>
          </div>
        ) : (
          <div className=" h-10 w-10 rounded-full flex-shrink-0">
            <img className="rounded-full" alt="profile" src={imgSrc} />
          </div>
        )} */}
        <div className=" h-10 w-10 rounded-full flex-shrink-0">
          <img className="rounded-full" alt="profile" src={imgSrc} />
        </div>

        <div
          className={
            author === user_id
              ? "relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
              : "relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
          }
        >
          <h2 className="relative mr-0 text-right pr-5 text-xs	font-semibold">
            {email}
          </h2>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
