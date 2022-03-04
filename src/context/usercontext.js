import i18next from "i18next";
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserdata] = useState(
    localStorage.getItem("logindata")
      ? JSON.parse(localStorage.getItem("logindata"))
      : null
  );
  const [userLanguage, setUserLanguage] = useState(
    localStorage.getItem("userLang")
      ? localStorage.getItem("userLang")
      : localStorage.setItem("userLang", "en")
  );

  const ChangeLanguage = (lang) => {
    return setUserLanguage(i18next.changeLanguage(lang));
  };

  const currentLanguage = userLanguage || "en";
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserdata,
        userLanguage,
        ChangeLanguage,
        currentLanguage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
