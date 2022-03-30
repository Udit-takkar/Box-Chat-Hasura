import React from "react";

function Input({
  message,
  handleChange,
}: {
  message: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex-grow ml-4">
      <div className="relative w-full">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          className="flex w-full text-white border bg-gray-800 rounded-xl border-gray-600 focus:outline-none focus:border-gray-300 pl-4 h-10"
        />
      </div>
    </div>
  );
}

export default Input;
