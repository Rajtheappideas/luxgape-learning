import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/usercontext";
import { toast } from "react-toastify";

const useUserData = () => {
  const { userData, setUserdata } = useUserContext();
  const navigate = useNavigate();
  const handleFailure = (result) => {
    console.log(result);
  };
  const handleSuccess = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUserdata(data);
    navigate("/");
  };
  const handleLogout = () => {
    axios("https://chessmafia.com/php/luxgap/App/api/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((res) => {
        toast(res?.data?.message, { type: "success" });
      })
      .catch((err) => console.log(err?.response?.data));
    localStorage.removeItem("user");
    setUserdata(null);
    navigate("/");
  };
  return { handleLogout, handleFailure, handleSuccess };
};

export default useUserData;
