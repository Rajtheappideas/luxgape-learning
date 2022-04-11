import axios from "axios";
import React, { useState } from "react";
import { useUserContext } from "../context/usercontext";
import { toast } from "react-toastify";
import Loading from "../assets/animations/loading1.json";
import Lottie from "react-lottie";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ---context----------
  const { userData } = useUserContext();

  //--------------api request----------
  const handleChangePassword = () => {
    if (oldPassword === "" || newPassword === "" || ConfirmPassword === "") {
      toast("Fields Should not be empty!!", {
        type: "warning",
      });
      return false;
    } else if (!(newPassword === ConfirmPassword)) {
      toast("password does not match with confirm password!!", {
        type: "warning",
      });
      return false;
    }
    setLoading(true);

    axios("https://chessmafia.com/php/luxgap/App/api/change-password", {
      method: "POST",
      params: {
        old_password: oldPassword,
        password: newPassword,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          toast(response?.data?.message, { type: "success" });
          setLoading(false);
          return true;
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "Error") {
          toast(err?.response?.data?.message, { type: "error" });
          setLoading(false);
          return false;
        }
      });
  };

  //   lottie file react
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      {/* -----------------input fields-------------------- */}
      <div className="w-full mx-auto">
        <div className="md:w-1/2 w-[90%] mx-auto">
          <label className="semifont-bold text-2xl ml-2">Old Password</label>
          <input
            type="text"
            placeholder="Enter your old password"
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full h-12 px-4 outline-green-400 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none border border-gray-400"
          />
        </div>
      </div>
      {/* -----------password ---------- */}
      <div className="w-full flex md:flex-row flex-col md:justify-around items-center mt-4">
        {/* -----------new password---------- */}
        <div className="md:w-[40%] w-[90%]">
          <label className="semifont-bold text-2xl ml-2">New Password</label>
          <input
            type="text"
            placeholder="Enter your new password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full h-12 px-4 outline-green-400 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none border border-gray-400"
          />
        </div>
        {/* -----------confirm passwrord---------- */}

        <div className="md:w-[40%] w-[90%]">
          <label className="semifont-bold text-2xl ml-2">Confirm Password</label>
          <input
            type="text"
            placeholder="Enter your confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 px-4 outline-green-400 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none border border-gray-400"
          />
        </div>
      </div>

      {/* -------------------save changes button------------*/}
      <div className="text-center mt-8">
        <button
          type="button"
          className="w-40 rounded-xl h-12 active:scale-95 transition-all duration-100 ease-in-out bg-primary text-white text-center"
          onClick={() => handleChangePassword()}
        >
          {loading ? (
            <Lottie
              options={defaultOptions}
              height={30}
              width={30}
              className="z-10"
            />
          ) : (
            "Change Password"
          )}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;