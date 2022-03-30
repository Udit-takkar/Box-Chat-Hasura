import React from "react";
import SendButtonIcon from "../../assets/SendButtonIcon";

function Send({ handleSendMessage }: { handleSendMessage: () => void }) {
  return (
    <div className="ml-4">
      <button
        onClick={handleSendMessage}
        className="flex items-center justify-center bg-gray-800 border border-gray-600  rounded-xl text-white px-4 py-1 flex-shrink-0"
      >
        <span>Send</span>
        <SendButtonIcon />
      </button>
    </div>
  );
}

export default Send;
