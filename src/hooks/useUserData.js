import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/usercontext";
import { toast } from "react-toastify";
import { BroadcastChannel } from "broadcast-channel";

const useUserData = () => {
  const handleFailure = (result) => {
    console.log(result);
  };
  // const handleSuccess = (data) => {
  //   localStorage.setItem("user", JSON.stringify(data));
  //   setUserdata(data);
  //   navigate("/");
  // };
  // const handleLogout = () => {
  //   axios("https://chessmafia.com/php/luxgap/App/api/logout", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "consumer-access-token": userData?.api_token || null,
  //     },
  //   })
  //     .then((res) => {
  //       if (res?.data?.status === "Success") {
  //         logoutChannel.postMessage("Logged out");
  //         toast("Logged out", { type: "success" });
  //         localStorage.clear();
  //         setUserdata(null);
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => console.log(err?.response?.data));
  // };

  // const logoutAllTabsEventListener = () => {
  //   logoutChannel.onmessage = (event) => {
  //     handleLogout();
  //     logoutChannel.close();
  //     console.log(event);
  //   };
  // };
  return {
    // handleLogout,
    handleFailure,
  };
};

export default useUserData;
