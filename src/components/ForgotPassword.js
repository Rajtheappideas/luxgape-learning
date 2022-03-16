import { XIcon } from "@heroicons/react/outline";
import React from "react";
import Modal from "react-modal";

const ForgotPassword = ({ openModal, handleModal }) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => handleModal()}
      preventScroll={false}
    >
      <button onClick={() => handleModal()} className="">
        <XIcon className="h-9 z-10 absolute top-3 right-4" />
      </button>
      <div className="md:h-[500px] h-full md:w-[500px] w-full p-5 space-y-5 absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center  rounded-tl-[130px] rounded-br-[130px] rounded-tr-none rounded-bl-none sm:shadow-2xl bg-white">
        <h1 className="font-bold text-4xl text-center tracking-wide">
          Forgot Password
        </h1>
        <p className="font-light text-lg">
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </p>
        <p className="font-light text-lg">
          store your password. So rest assured that we will never send your
          password via email. For security reasons, we do NOT
        </p>
        {/* -------------input fieilds--------------- */}
        <div className="space-y-2 w-full">
          <div>
            {/* <label className="font-semibold text-2xl">Email</label> */}
            <input
              type="text"
              placeholder="type your Email"
              name="password"
              className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
            />
          </div>
          <div>
            <button
              type="submit"
              className={`border text-lg font-semibold text-white text-center px-6 w-full h-[56px] bg-gradient-to-r from-to to-from rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPassword;
