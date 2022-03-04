import React from "react";
import img1 from "../../assets/aboutusimg (1).jpg";
import img2 from "../../assets/aboutusimg (2).jpg";
import img3 from "../../assets/aboutusimg (3).jpg";
import img4 from "../../assets/aboutusimg (4).jpg";
import img5 from "../../assets/aboutusimg (5).jpg";
import img6 from "../../assets/aboutusimg (6).jpg";
import img7 from "../../assets/aboutusimg (7).jpg";
import img8 from "../../assets/aboutusimg (8).jpg";
import img9 from "../../assets/aboutusimg (9).jpg";
import img10 from "../../assets/aboutusimg (10).jpg";
import img11 from "../../assets/aboutusimg (11).jpg";
import img12 from "../../assets/aboutusimg (12).jpg";
import img13 from "../../assets/aboutusimg (13).jpg";

const AboutUsimg = () => {
  return (
    <div className="p-10 my-10 w-full grid lg:grid-cols-5 grid-rows-auto md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center gap-5">
      <img
        src={img1}
        alt="img1"
        className="object-center object-cover w-56 h-56 rounded-tl-[110px] rounded-br-[110px] rounded-tr-none rounded-bl-none "
      />
      <img
        src={img2}
        alt="img1"
        className="object-center mx-auto mt-6 object-cover w-32 h-32 rounded-tl-[65px] rounded-br-[60px] rounded-tr-none rounded-bl-none "
      />
      <img
        src={img10}
        alt="img1"
        className="hidden sm:block object-center object-cover w-56 h-56 rounded-tl-none rounded-br-none rounded-tr-[110px] rounded-bl-[110px] "
      />
      <img
        src={img3}
        alt="img1"
        className="object-center object-cover mx-auto my-auto w-24 h-24 rounded-tl-[53px] rounded-br-[53px] rounded-tr-none rounded-bl-none "
      />
      <img
        src={img5}
        alt="img1"
        className="object-center mt-5 object-cover w-44 h-44 rounded-tl-[83px] rounded-br-[83px] rounded-tr-none rounded-bl-none "
      />
      <img
        src={img6}
        alt="img1"
        className="object-center mt-8 mx-auto object-cover w-32 h-32 rounded-tl-none rounded-br-none rounded-tr-[65px] rounded-bl-[60px] "
      />
      <img
        src={img7}
        alt="img1"
        className="object-center object-cover w-44 h-44 rounded-tl-[83px] rounded-br-[83px] rounded-tr-none rounded-bl-none "
      />

      <img
        src={img8}
        alt="img1"
        className="object-center my-auto object-cover w-44 h-44 rounded-tl-none rounded-br-none rounded-tr-[100px] rounded-bl-[91px] "
      />
      <img
        src={img9}
        alt="img1"
        className="object-center mt-7 object-cover w-32 h-32 rounded-tl-[65px] rounded-br-[60px] rounded-tr-none rounded-bl-none "
      />
      <img
        src={img4}
        alt="img1"
        className="hidden md:block object-center -ml-4 object-cover w-56 h-56 rounded-tl-[110px] rounded-br-[110px] rounded-tr-none rounded-bl-none "
      />

      <img
        src={img11}
        alt="img1"
        className="hidden md:block object-center object-cover w-56 h-56 rounded-tl-[110px] rounded-br-[110px] rounded-tr-none rounded-bl-none "
      />
      <img
        src={img12}
        alt="img1"
        className="hidden md:block object-center object-cover w-44 h-44 rounded-tl-none rounded-br-none rounded-tr-[100px] rounded-bl-[91px] "
      />
      <img
        src={img13}
        alt="img1"
        className="hidden lg:block object-left mt-7  object-cover w-56 h-56 rounded-tl-[110px] rounded-br-[110px] rounded-tr-none rounded-bl-none "
      />
      <img
        src={img2}
        alt="img1"
        className="hidden lg:block object-center  object-cover w-44 h-44 rounded-tl-none rounded-br-none rounded-tr-[100px] rounded-bl-[91px] "
      />
      <img
        src={img6}
        alt="img1"
        className="hidden lg:block object-center object-cover w-44 h-44 rounded-tl-none rounded-br-none rounded-tr-[100px] rounded-bl-[91px] "
      />
    </div>
  );
};

export default AboutUsimg;
