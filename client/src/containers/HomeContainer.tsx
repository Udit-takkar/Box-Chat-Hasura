import React from "react";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";

function HomeContainer({ children }: { children: React.ReactNode }) {
  return (
    <Layout title="Box Chat - Explore Chat Rooms">
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-almost w-full overflow-x-hidden">
          <SideBar />
          {children}
        </div>
      </div>
    </Layout>
  );
}

export default HomeContainer;
