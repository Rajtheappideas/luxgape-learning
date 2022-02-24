import React from "react";
import { MetaTags } from "react-meta-tags";

const Error404 = () => {
  return (
    <div>
      <MetaTags>
        <title>page not found</title>
      </MetaTags>
      <p className="absolute top-1/3 left-1/2 -translate-x-1/2 text-8xl font-bold ">
        Page Not Found 404!!!! Oops
      </p>
    </div>
  );
};

export default Error404;
