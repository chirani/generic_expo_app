import React from "react";
import NotLoggedInScreen from "@screens/NotLoggedInScreen";
import useAuthState from "zustand/Auth";

const Inbox = () => {
  const { isLogged } = useAuthState();
  return !isLogged ? <NotLoggedInScreen /> : <></>;
};

export default Inbox;
