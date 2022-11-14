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

  return {
    // handleLogout,
    handleFailure,
  };
};

export default useUserData;
