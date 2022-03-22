import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/usercontext";

const useUserData = () => {
  const { userData, setUserdata } = useUserContext();
  const navigate = useNavigate();

  const handleFailure = (result) => {
    console.log(result);
  };
  const handleSuccess = (googledata) => {
    localStorage.setItem("googlelogin", JSON.stringify(googledata));
    // ||  localStorage.setItem("user", userData);
    setUserdata(googledata);
    navigate("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("googlelogin");
    localStorage.removeItem("user");
    setUserdata(null);
    navigate("/");
  };
  return { handleLogout, handleFailure, handleSuccess };
};

export default useUserData;
