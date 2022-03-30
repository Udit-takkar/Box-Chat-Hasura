import React from "react";
import defaultPhoto from "../../assets/default_profile.png";

interface formStateProps {
  user: any;
}

function ProfilePhoto({ user }: formStateProps) {
  return (
    <div className="flex justify-center w-full mb-4 ">
      {user.nft_image_url ? (
        <div className="hex" style={{ width: "100px", height: "100px" }}>
          <div
            className="hex-background"
            style={{ width: "100px", height: "100px" }}
          >
            <img src={user?.nft_image_url} alt="main" />
          </div>
        </div>
      ) : (
        <div className=" rounded-full bg-gray-100 mb-4 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
          <div className="rounded-full bg-black w-full h-full overflow-auto">
            <img
              src={user?.image_url ? user?.image_url : defaultPhoto}
              alt="main"
              className="rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePhoto;
