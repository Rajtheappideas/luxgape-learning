import React from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import pagenotfound from "../assets/animations/pagenotfound.json";

const Error404 = () => {
  // default options for lottie files
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pagenotfound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="p-10 text-center">
      <MetaTags>
        <title>page not found</title>
      </MetaTags>
      {/* Page Not Found 404!!!! Oops */}
      <Lottie options={defaultOptions} height={500} width={800} />
      <Link to="/">
        <button className="p-5 inline-block mx-auto hover:bg-blue-800 focus:scale-95 transition-all transform duration-100 ease-in-out text-2xl rounded-xl bg-blue-500 text-white">
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error404;
