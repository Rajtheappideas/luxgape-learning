import React, { useDebugValue, useEffect, useState } from "react";
import { ChangePassword, EditProfile, Footer, Navbar } from "../components";
import { MetaTags } from "react-meta-tags";
import { t } from "i18next";
import { ToastContainer } from "react-toastify";
import { UserIcon, CameraIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useUserContext } from "../context/usercontext";

const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(true);
  const [changePassword, setChangePassword] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [prevImage, setprevImage] = useState(null);
  const [userDetails, setUserDetails] = useState({});

  // ---context----------
  const { userData } = useUserContext();
  //   ---------------language code--------
  const lang_code = localStorage.getItem("lang_code");

  // image upload
  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setprevImage(URL.createObjectURL(file));
    setProfileImage(file);
  };

  useEffect(() => {
    axios("https://chessmafia.com/php/luxgap/App/api/get-user-details", {
      method: "POST",
      params: {
        lang_code: lang_code,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((response) => {
        setUserDetails(response?.data?.data);
        return true;
      })
      .catch((err) => {
        console.log("error ->", err?.response?.data);
        return false;
      });
  }, []);

  return (
    <>
      <MetaTags>
        <title>{t("User_Profile")}</title>
      </MetaTags>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Navbar />
      <div className="md:mx-auto shadow-2xl rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-none rounded-bl-none md:w-9/12 mx-5 h-auto my-7 pb-10">
        <div className="pt-40">
          {/* --------------image and name------------  */}
          <div className="bg-primary h-28">
            <div className="relative md:w-40 md:h-40">
              <input
                type="file"
                accept="image/*"
                className="absolute -top-20 left-28 h-full w-full cursor-pointer z-10 opacity-0"
                onChange={handleImageUpload}
                disabled={changePassword ? true : false}
              />

              {prevImage ? (
                <img
                  src={prevImage}
                  className="w-full h-full object-cover bg-gray-300 object-center rounded-full border-8 border-white absolute -top-20 left-28"
                />
              ) : null ? (
                <UserIcon className="md:h-40 md:w-40 h-28 w-28 bg-gray-300 rounded-full border-8 border-white absolute md:-top-20 -top-10 md:left-28 left-32" />
              ) : (
                <img
                  src={
                    prevImage
                      ? prevImage
                      : `https://chessmafia.com/php/luxgap/App/${userDetails?.profile}`
                  }
                  className="w-full h-full object-cover bg-gray-300 object-center rounded-full border-8 border-white absolute -top-20 left-28"
                />
              )}
              <CameraIcon className="h-10 absolute md:bottom-20 md:-right-24 -bottom-20 right-36 z-10 w-auto bg-gray-100 rounded-full" />
            </div>
            {/* <div className="pt-2 text-xl space-y-1">
              <p className="font-semibold">full name</p>
              <p className="font-semibold">Email</p>
            </div> */}
            {/* <div />
            <div />
            <div />
            <div /> */}
          </div>
          {/* ------------buttons edit profile and change password------------ */}
          <div className="mx-auto text-lg flex justify-center bg-orange-200 items-center my-12 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none w-80 h-12">
            <button
              type="button"
              onClick={() => {
                setChangePassword(false);
                setEditProfile(true);
              }}
              className={`${
                editProfile && "bg-primary"
              } font-semibold w-full h-full rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none`}
            >
              Edit Profile
            </button>
            <button
              type="button"
              onClick={() => {
                setChangePassword(true);
                setEditProfile(false);
              }}
              className={`${
                changePassword && "bg-primary"
              } font-semibold w-full h-full rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none`}
            >
              Change Password
            </button>
          </div>
          {/* ----------------edit profile div--------------- */}
          {editProfile && (
            <EditProfile
              profileImage={profileImage}
              setProfileImage={setProfileImage}
              userDetails={userDetails}
            />
          )}

          {/* ----------------change password div--------------- */}
          {changePassword && <ChangePassword />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
