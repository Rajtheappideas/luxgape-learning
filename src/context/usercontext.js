import axios from "axios";
import i18next from "i18next";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BroadcastChannel } from "broadcast-channel";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserdata] = useState(null);
  // localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : null
  const [userLanguage, setUserLanguage] = useState(
    window.localStorage.getItem("lang_code")
      ? window.localStorage.getItem("lang_code")
      : window.localStorage.setItem("lang_code", "en")
  );
  const [courseDetails, setCourseDetails] = useState([]);
  const ChangeLanguage = (lang) => {
    return setUserLanguage(i18next.changeLanguage(lang));
  };
  const [examSubmitted, setExamSubmitted] = useState(false);

  const navigate = useNavigate();
  const logoutChannel = new BroadcastChannel("handleLogout");
  const loginChannel = new BroadcastChannel("handleSuccess");

  let interval;
  const currentLanguage = userLanguage || "en";

  const handleSuccess = () => {
    loginChannel.postMessage("Logged in");
    loginChannel.onmessage = (event) => {
      loginChannel.close();
      window.location.reload();
      console.log(event);
    };
  };

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
          logoutChannel.postMessage("Logged out");
          logoutChannel.onmessage = (event) => {
            logoutChannel.close();
          };
          toast("Logged out", { type: "success" });
          window.localStorage.clear();
          setUserdata(null);
          navigate("/");
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Un-Authentic") {
          window.localStorage.clear();
          navigate("/");
          window.location.reload();
        }
      });
  };

  const logoutAllTabsEventListener = () => {
    logoutChannel.onmessage = (event) => {
      window.location.reload();
      logoutChannel.close();
    };
  };
  const loginAllTabsEventListener = () => {
    loginChannel.onmessage = (event) => {
      window.location.reload();
      loginChannel.close();
    };
  };
  useEffect(() => {
    setUserdata(JSON.parse(window.localStorage.getItem("user")));
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
        setExamSubmitted,
        examSubmitted,
        interval,
        handleLogout,
        logoutAllTabsEventListener,
        handleSuccess,
        loginAllTabsEventListener,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
