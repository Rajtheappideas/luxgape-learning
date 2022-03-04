import React, { createContext, useContext, useState } from "react";
import i18n from "i18next";

const UserLanguageContext = createContext();

const Languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "sp",
    name: "Española",
  },
];

export const UserLanguageProvider = ({ children }) => {
  const [userLang, setUserLang] = useState(
    localStorage.getItem("userLang")
      ? JSON.parse(localStorage.getItem("userLang"))
      : null
  );

  return (
    <UserLanguageContext.Provider value={{ userLang, setUserLang }}>
      {children}
    </UserLanguageContext.Provider>
  );
};

export const useUserLanguageContext = () => {
  return useContext(UserLanguageContext);
};
