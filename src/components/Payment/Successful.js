import React from "react";
import Modal from "react-modal";
import { CheckCircleIcon, XIcon } from "@heroicons/react/outline";
import Lottie from "react-lottie";
import animation from "../../assets/animations/payment-successful.json";

const Successful = ({ modalOpen, closeModal }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => closeModal()}
      preventScroll={false}
    >
      <button onClick={() => closeModal()} className="">
        <XIcon className="h-9 absolute top-3 right-4" />
      </button>
      <div className="h-[400px] w-[400px] absolute top-1/5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center  rounded-tl-[130px] rounded-br-[130px] rounded-tr-none rounded-bl-none shadow-2xl bg-white">
        {/* <CheckCircleIcon className="h-60" color="green" /> */}
        <Lottie options={defaultOptions} height={300} width={300} />

        <p className="text-4xl font-bold text-green-500">Successful</p>
        <p className="text-2xl font-bold ">Payment Done</p>
      </div>
    </Modal>
  );
};

export default Successful;
