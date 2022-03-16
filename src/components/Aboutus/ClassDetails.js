import React from "react";
import classdetail from "../../assets/classdetails.jpg";
import logo from "../../assets/LXG_RVB.png";

const ClassDetails = () => {
  return (
    <div className="sm:p-10 p-3 grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-1 gap-10 justify-items-center items-center">
      <div className="space-y-7">
        {/* ---------------title text-------------- */}
        <span className="text-6xl font-bold block">Lorem Ipsum</span>
        {/* -----------image on large screen-------------- */}
        <div className="lg:hidden block">
          <div className="relative w-full">
            <img
              src={classdetail}
              alt="classdetailimg"
              className=" object-center object-cover w-full h-[214px] rounded-tl-[107px] rounded-br-[107px] rounded-tr-none rounded-bl-none "
            />
            <img
              src={logo}
              alt="logo"
              className="sm:h-20 h-12 absolute top-[40%] left-[55%] -translate-x-1/2 object-center object-cover"
            />
          </div>
        </div>
        {/* ----------------------deatils------------------ */}
        <p className="text-secondary text-lg leading-relaxed tracking-tighter">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p className="text-secondary text-lg leading-relaxed tracking-tighter">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      {/* -----------image on large screen-------------- */}
      <div className="relative hidden lg:block">
        <img
          src={classdetail}
          alt="classdetailimg"
          className=" object-center object-cover w-[607px] h-[214px] rounded-tl-[107px] rounded-br-[107px] rounded-tr-none rounded-bl-none "
        />
        <img
          src={logo}
          alt="logo"
          className=" h-20 absolute top-[30%] left-[53%] -translate-x-1/2 object-center object-cover"
        />
      </div>
    </div>
  );
};

export default ClassDetails;
