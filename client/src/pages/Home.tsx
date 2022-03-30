import React from "react";
import Layout from "../components/Layout";
import CreateRoomForm from "../components/forms/CreateRoom";

function Home() {
  return (
    <Layout title="Box Chat - Home">
      <div className="flex flex-col justify-center content-center	items-center w-full rounded-lg bg-bkg ">
        <div className="flex flex-col  py-4 px-8 justify-around items-center border border-gray-600 rounded-lg  bg-gray-800 shadow-2xl	">
          <div className="flex items-center justify-between w-full ">
            <h2 className="text-white font-black text-xl mr-2 whitespace-nowrap	">
              Enter Room Name :
            </h2>
          </div>
          <CreateRoomForm />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
