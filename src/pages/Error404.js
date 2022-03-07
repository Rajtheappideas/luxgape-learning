import React from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Error404 = () => {
  return (
    <div className="p-10">
      <MetaTags>
        <title>page not found</title>
      </MetaTags>
      <Link to="/">
        <img
          src={logo}
          className="h-20 cursor-pointer inline object-contain"
          alt="logo"
        />
      </Link>
      <p className="absolute top-1/3 left-1/2 -translate-x-1/2 text-8xl font-bold ">
        Page Not Found 404!!!! Oops
      </p>
    </div>
  );
};

export default Error404;
