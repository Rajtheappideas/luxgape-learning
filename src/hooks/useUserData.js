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
    console.log(googledata);
    localStorage.setItem("logindata", JSON.stringify(googledata));
    setUserdata(googledata);
    navigate("/");
    window.location.reload();
  };
  const handleLogout = () => {
    localStorage.removeItem("logindata");
    setUserdata(null);
    navigate("/");
    window.location.reload();
  };
  return { handleLogout, handleFailure, handleSuccess };
};

export default useUserData;
