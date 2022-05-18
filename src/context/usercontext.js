import axios from "axios";
import i18next from "i18next";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BroadcastChannel } from "broadcast-channel";

import useUserData from "../hooks/useUserData";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserdata] = useState(null);
  // localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : null
  const [userLanguage, setUserLanguage] = useState(
    localStorage.getItem("lang_code")
      ? localStorage.getItem("lang_code")
      : localStorage.setItem("lang_code", "en")
  );
  const [courseDetails, setCourseDetails] = useState([]);
  const ChangeLanguage = (lang) => {
    return setUserLanguage(i18next.changeLanguage(lang));
  };
  const [interval, setinterval] = useState(null);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const navigate = useNavigate();
  const logoutChannel = new BroadcastChannel("handleLogout");

  // let interval;
  const currentLanguage = userLanguage || "en";
  const handleLogout = () => {
    axios("https://chessmafia.com/php/luxgap/App/api/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token || null,
      },
    })
      .then((res) => {
        if (res?.data?.status === "Success") {
          // logoutChannel.postMessage("Logged out");
          toast("Logged out", { type: "success" });
          localStorage.clear();
          setUserdata(null);
          navigate("/");
        }
      })
      .catch((err) => console.log(err?.response?.data));
  };

  const logoutAllTabsEventListener = () => {
    logoutChannel.onmessage = (event) => {
      handleLogout();
      logoutChannel.close();
      console.log(event);
    };
  };
  useEffect(() => {
    setUserdata(JSON.parse(localStorage.getItem("user")));
    logoutAllTabsEventListener();
  }, []);
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserdata,
        userLanguage,
        ChangeLanguage,
        currentLanguage,
        setCourseDetails,
        courseDetails,
        interval,
        setinterval,
        setExamSubmitted,
        examSubmitted,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
