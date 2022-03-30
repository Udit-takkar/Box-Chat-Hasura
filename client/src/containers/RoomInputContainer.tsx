import React from "react";

function RoomInputContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center h-16  rounded-xl bg-gray-800 w-full px-4">
      {children}
    </div>
  );
}

export default RoomInputContainer;
