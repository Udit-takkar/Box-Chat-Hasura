import React from "react";
import Layout from "../components/Layout";

function RoomContainer({ children }: { children: React.ReactNode }) {
  return (
    <Layout title="Box Chat Rooms">
      <div className="flex flex-col flex-auto h-full ">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 border-t">
          {children}
        </div>
      </div>
    </Layout>
  );
}

export default RoomContainer;
