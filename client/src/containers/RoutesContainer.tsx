import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/NavBar/index";
import Home from "../pages/Home";
import Room from "../pages/Room";
import HomeContainer from "./HomeContainer";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import Invite from "../pages/SendInvite";
import Profile from "../pages/Profile";
import Invitations from "../pages/Invitations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../contexts/Auth";
import Rooms from "../pages/Rooms";

function MainContainer() {
  const { user, getAccessTokenSilently, isAuthenticated, isLoading } =
    useAuth0();

  const { token, login } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const getTokenSilently = async () => {
      try {
        const res = await getAccessTokenSilently();
        // console.log(res);
        login(res);
      } catch (err: any) {
        console.log(err);
      }
    };

    if (localStorage.getItem("token") && !token) {
      login(localStorage.getItem("token") || "");
    } else if (isAuthenticated && !isLoading && !token) {
      getTokenSilently();
    } else if (!isLoading && !isAuthenticated) {
      history.push("/login");
    }
  }, [user, isLoading]);

  return (
    <>
      <NavBar />
      <HomeContainer>
        <ToastContainer />
        <Route exact path="/" component={Home} />
        <Route exact path="/invite" component={Invite} />
        <Route exact path="/room/:id" component={Room} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/invitations" component={Invitations} />
        <Route exact path="/rooms" component={Rooms} />
      </HomeContainer>
    </>
  );
}

export default MainContainer;
