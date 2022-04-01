import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";
import useUserId from "../hooks/useId";
import Loader from "../components/Profile/Loader";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../graphql/autogen/types";
import ProfilePhoto from "../components/Profile/ProfilePhoto";
import Layout from "../components/Layout";
import { useAuth } from "../contexts/Auth";
import { useMoralis } from "react-moralis";
import { EditProfileValidation } from "../utils/validationSchema";
import { useMoralisDapp } from "../contexts/MoralisDappProvider";
import { useNFTBalances } from "react-moralis";
import { Modal } from "../components/Modal";
import { GET_USER_BY_ID, GET_USER_PHOTO } from "../graphql/queries";

import { Formik, Form, Field, ErrorMessage } from "formik";

export const getAccountString = (account: string) =>
  account.slice(0, 5) + ". . . ." + account.slice(-5);

function Profile() {
  const user_id = useUserId();
  const { logout } = useAuth0();
  const { authLogout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [isProfileUpdating, setIsProfileUpdating] = useState(false);

  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();

  const { getNFTBalances, data: nfts } = useNFTBalances();
  useEffect(() => {
    getNFTBalances({
      params: { chain: "mumbai", address: walletAddress || "" },
    });
  }, []);
  const { walletAddress, chainId } = useMoralisDapp();

  const usernameRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const { data, loading } = useGetUserQuery({
    variables: {
      user_id: user_id ?? "",
    },
  });

  const [updateUser] = useUpdateUserMutation({
    refetchQueries: [GET_USER_BY_ID, "getUser"],
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    authLogout();
    logout();
  };

  const saveNFTUrl = async ({ nft_image_url }: { nft_image_url: string }) => {
    setIsProfileUpdating(true);
    try {
      const resp = await updateUser({
        variables: {
          user_id: user_id ?? "",
          nft_image_url,
          username: data?.User_by_pk?.username || null,
          image_url: data?.User_by_pk?.image_url || null,
        },
      });

      if (!resp.data || resp.errors) {
        console.log(resp.errors);
        throw new Error("Something Went wronf");
      }
      setShowModal(false);
      toast.success("User Updated Successfully", {
        className: "toast-success",
        autoClose: 2000,
      });
    } catch (e) {
      toast.error("Error : Something Went Wrong");
      console.log(e);
    }
    setIsProfileUpdating(false);
  };

  const removeNft = async () => {
    setIsProfileUpdating(true);
    try {
      const resp = await updateUser({
        variables: {
          user_id: user_id ?? "",
          nft_image_url: null,
          username: data?.User_by_pk?.username || null,
          image_url: data?.User_by_pk?.image_url || null,
        },
      });

      if (!resp.data || resp.errors) {
        console.log(resp.errors);
        throw new Error("Something Went wronf");
      }

      toast.success("User Updated Successfully", {
        className: "toast-success",
        autoClose: 2000,
      });
    } catch (e) {
      toast.error("Error : Something Went Wrong");
      console.log(e);
    }
    setIsProfileUpdating(false);
  };

  const handleConnect = async () => {
    await authenticate();
  };

  const getText = () => {
    if (chainId !== "0x13881") {
      return "Connect to Mumbai Testnet";
    } else if (isAuthenticated && walletAddress) {
      return getAccountString(walletAddress);
    }
  };
  return (
    <Layout title="Box-Chat Profile">
      <div className="grid w-full place-items-center bg-bkg ">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-col place-items-center min-w-forty p-8  border border-gray-600 rounded-lg  bg-gray-800 shadow-2xl">
              <h1 className="font-black text-white text-2xl mb-4">
                My Account
              </h1>

              <ProfilePhoto user={data?.User_by_pk} />
              <div className="flex items-center justify-center mb-5">
                <p className="text-navFont text-white font-montserrat text-md font-bold mx-3 tracking-wide  bg-gray-600 p-2 rounded-lg">
                  {isAuthenticating ? <Loader /> : getText()}
                  {!isAuthenticated && !isAuthenticating && (
                    <button
                      className="cursor-pointer text-white"
                      onClick={handleConnect}
                    >
                      Connect Wallet
                    </button>
                  )}
                </p>
              </div>
              <Formik
                validationSchema={EditProfileValidation}
                initialValues={{
                  username: data?.User_by_pk?.username || "",
                  imageUrl: data?.User_by_pk?.image_url || "",
                }}
                onSubmit={async (values, { setSubmitting, setFieldError }) => {
                  setSubmitting(true);
                  const body = { ...values };
                  if (user_id === "") {
                    setSubmitting(false);
                    return;
                  }
                  updateUser({
                    variables: {
                      user_id: user_id ?? "",
                      image_url: body.imageUrl,
                      username: body.username,
                    },
                  })
                    .then(data => {
                      toast.success("User Updated Successfully", {
                        className: "toast-success",
                        autoClose: 2000,
                      });
                    })
                    .catch(err => {
                      toast.error("Error : Something Went Wrong");
                      console.log(err);
                    });
                  setSubmitting(false);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form className="w-full">
                    <div className="bg-gray-700 rounded-lg text-white w-full mb-4">
                      <div className="flex justify-between p-4 ">
                        <div className="flex flex-col">
                          <h2 className="text-sm font-semibold text-gray-400">
                            Username
                          </h2>
                          <Field
                            name="username"
                            type="text"
                            className="bg-gray-600 rounded-md p-2 focus:border-white focus:outline-none "
                            placeholder="Enter Username"
                            innerRef={usernameRef}
                          />
                          <ErrorMessage name="username">
                            {msg => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <button
                          onClick={() => {
                            console.log("username", usernameRef);
                            usernameRef.current && usernameRef.current.focus();
                          }}
                          className="hover:bg-gray-800 px-4 rounded-lg"
                          type="button"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="flex justify-between p-4">
                        <div className="flex flex-col">
                          <h2 className="text-sm font-semibold text-gray-400">
                            Email
                          </h2>
                          <Field
                            name="name"
                            type="email"
                            value={data?.User_by_pk?.email}
                            disabled
                            className="input bg-gray-600 rounded-md p-2 focus:border-white"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between p-4">
                        <div className="flex flex-col">
                          <h2 className="text-sm font-semibold text-gray-400">
                            Image URL
                          </h2>
                          <Field
                            name="imageUrl"
                            type="text"
                            className="bg-gray-600 p-2 rounded-md focus:outline-none "
                            placeholder="Enter Profile Image URL"
                            innerRef={imageRef}
                          />
                          <ErrorMessage name="imageUrl">
                            {msg => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <button
                          className="hover:bg-gray-800 px-4 rounded-lg"
                          type="button"
                          onClick={() =>
                            imageRef.current && imageRef.current.focus()
                          }
                        >
                          Edit
                        </button>
                      </div>
                      {isAuthenticated && data?.User_by_pk && (
                        <div className="flex items-center justify-between w-full p-2 px-4">
                          {data?.User_by_pk?.nft_image_url ? (
                            <button
                              type="button"
                              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                              onClick={() => removeNft()}
                            >
                              Remove NFT Profile Picture
                            </button>
                          ) : (
                            <>
                              <h2 className="text-white text-sm">
                                Choose NFT Profile Picture
                              </h2>

                              <button
                                type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                data-modal-toggle="defaultModal"
                                onClick={() => setShowModal(true)}
                              >
                                Select Profile Picture
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between w-full">
                      <button
                        disabled={isSubmitting || isProfileUpdating}
                        onSubmit={() => handleSubmit()}
                        type="submit"
                        className="bg-gray-700 text-white py-2 px-4 mt-4 rounded "
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={handleLogout}
                        className="bg-gray-700 text-white py-2 px-4 mt-4 rounded "
                      >
                        Sign Out
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </>
        )}
      </div>
      <Modal
        onClose={() => setShowModal(!showModal)}
        title="Select NFT"
        show={showModal}
      >
        <div className="grid grid-cols-3 gap-4 w-full overflow-y-auto">
          {nfts?.result?.map(nft => {
            return (
              nft.metadata && (
                <div
                  key={nft.token_id}
                  className="mx-2 h-60 w-60 relative col-span-1"
                >
                  <div
                    className="absolute grid place-items-center rounded-lg w-full h-full transition duration-200 ease-in-out hover:bg-dark-purple opacity-0 hover:opacity-60 cursor-pointer"
                    onClick={() =>
                      saveNFTUrl({
                        nft_image_url: `https://ipfs.infura.io/ipfs/${nft.metadata.image}`,
                      })
                    }
                  >
                    <h1 className="text-white text-2xl">Select This NFT</h1>
                  </div>
                  <img
                    alt="nft"
                    src={`https://ipfs.infura.io/ipfs/${nft.metadata.image}`}
                    className="h-60 w-60"
                  />

                  <h2
                    className="font-press-start text-xs text-center text-nft-heading cursor-pointer whitespace-nowrap"
                    onClick={() => (window.location.href = nft.metadata.image)}
                  >
                    {nft?.metadata?.title}
                  </h2>
                </div>
              )
            );
          })}
        </div>
      </Modal>
    </Layout>
  );
}

export default Profile;
