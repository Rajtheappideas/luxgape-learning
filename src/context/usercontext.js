import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserdata] = useState(
    localStorage.getItem("logindata")
      ? JSON.parse(localStorage.getItem("logindata"))
      : null
  );

  return (
    <UserContext.Provider value={{ userData, setUserdata }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
