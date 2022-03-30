import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import client from "../src/graphql/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./config";
import { AuthProvider } from "./contexts/Auth";
import { MoralisProvider } from "react-moralis";
import { MoralisDappProvider } from "./contexts/MoralisDappProvider";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

require("dotenv").config();

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file."
    );
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <AuthProvider>
          <Auth0Provider
            domain={authConfig.domain}
            clientId={authConfig.clientId}
            redirectUri={
              process.env.REACT_APP_DEVELOPMENT_ENV === "development"
                ? authConfig.redirect_uri
                : "https://box-chat.vercel.app"
            }
            audience={authConfig.audience}
            // scope="openid profile email"
          >
            <ApolloProvider client={client}>
              <MoralisDappProvider>
                <App />
              </MoralisDappProvider>
            </ApolloProvider>
          </Auth0Provider>
        </AuthProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <>Hello My Friend</>
      </div>
    );
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
