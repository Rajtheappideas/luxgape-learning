import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";

const data = [
  { id: 1, heading: <AiFillHtml5 />, name: "Html5" },
  { id: 2, heading: <DiCss3Full />, name: "Css3" },
  { id: 3, heading: "file-code", name: "Web Development" },
  { id: 4, heading: "object-group", name: "Web Design Skills" },
  { id: 5, heading: "sitemap", name: "Advanced Sheets Styling" },
  { id: 6, heading: "laptop-code", name: "Adaptive Layout Code" },
  { id: 7, heading: "window-restore", name: "Moved the site to WordPress" },
  { id: 8, heading: "edit", name: "Editing and adding content" },
];
const SkillsYouGet = () => {
  return (
    <div className="sm:p-10 p-5 space-y-10">
      {/* --------------heading----------- */}
      <p className="font-bold text-5xl text-center block">
        Skills you will get
      </p>
      {/* -----------jsut paragraph----------- */}
      <p className="text-lg font-light sm:px-16 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      {/* -----------rounded all divs grid alyout------------- */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-5 place-items-center items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative hover:scale-90 transform transition ease-in-out duration-150 h-[247px] w-[276px] rounded-tl-[123px] rounded-br-[123px] rounded-tr-none rounded-bl-none border-primary border"
          >
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-center ">
              <span className="bg-clip-text text-transparent whitespace-nowrap bg-gradient-to-r from-to to-from text-3xl font-bold">
                {item.heading}
              </span>
              <p className="text-transparent text-center mx-auto whitespace-normal bg-clip-text bg-gradient-to-r from-to to-from text-xl font-bold">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsYouGet;
