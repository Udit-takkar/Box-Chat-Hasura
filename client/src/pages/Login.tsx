import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BoyIllustration from "../assets/Ikbal.png";
import Layout from "../components/Layout";
import ProgressiveImage from "react-progressive-graceful-image";
import Blurred from "../assets/blur.png";

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    try {
      const res = await loginWithRedirect();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout title="Box Chat- Login">
      <div className="bkground flex items-center justify-center">
        <div className="left-wrapper mb-10">
          <h1 className="font-sans test flex-1 ml-10">
            Get Started with Ultimate Realtime Chat Rooms
          </h1>
          <button
            onClick={handleLogin}
            className="login-btn text-xl bg-transparent hover:bg-btn text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent  ml-10 mt-5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg border-none "
          >
            Login / Signup Now
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "https://github.com/Udit-takkar/Box-Chat-Hasura")
            }
            className="login-btn text-xl bg-transparent hover:bg-btn text-white  hover:text-white py-2 px-4 border border-white hover:border-transparent  ml-10 mt-5  bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg border-none"
          >
            View On Github
          </button>
        </div>
        <ProgressiveImage
          delay={1500}
          src={BoyIllustration}
          placeholder={Blurred}
          rootMargin="0% 0% 0%"
          threshold={[1]}
        >
          {(src: string) => (
            <img
              src={src}
              className="h-4/5 w-auto mr-12"
              alt="an alternative text"
            />
          )}
        </ProgressiveImage>
      </div>
    </Layout>
  );
};

export default Login;
