import React from "react";
import img from "../../assets/moreaboutusimg.jpg";

const MoreAboutUs = () => {
  return (
    <div className="relative p-10 w-full h-full bg-black rounded-tl-[285px] rounded-br-[285px] rounded-tr-none rounded-bl-none">
      {/* ---------------------eclipse------------ */}
      {/* <div className="absolute -bottom-20 -right-0 blur-[250px]   w-[300px] h-[300px] rounded-full bg-blue-300 " /> */}

      <div className="text-white p-16 grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 gap-10 items-center">
        
        {/* --------------image is here------------------- */}
        <div className="sm:block hidden lg:hidden">
          <img
            src={img}
            alt="studyimage"
            className="w-[574px] h-[410px] object-center object-cover rounded-tl-[205px] rounded-br-[205px] rounded-tr-none rounded-bl-none bg-secondary "
          />
        </div>
        {/* ------------------text is here---------------- */}
        <div className="w-full ">
          <p className="text-5xl font-medium tracking-wide block">
            More About Us
          </p>
          <p className="text-2xl w-[90%] leading-normal tracking-normal my-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-primary rounded-tl-[29px] rounded-br-[29px] rounded-tr-none rounded-bl-none w-[185px] h-[58px] text-xl text-center font-bold ">
            Learn More
          </button>
        </div>

        {/* --------------image is here------------------- */}
        <div className="lg:block hidden">
          <img
            src={img}
            alt="studyimage"
            className="w-[574px] h-[410px] object-center object-cover rounded-tl-[205px] rounded-br-[205px] rounded-tr-none rounded-bl-none bg-secondary "
          />
        </div>
      </div>
    </div>
  );
};

export default MoreAboutUs;
