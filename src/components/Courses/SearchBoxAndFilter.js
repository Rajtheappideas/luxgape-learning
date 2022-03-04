import React, { useState } from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { BiDollar } from "react-icons/bi";
import { FilterBox } from "../index";

const SearchBoxAndFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <div className="p-10">
      <div className=" flex lg:justify-end justify-center lg:space-y-0 space-y-3 flex-wrap items-center md:space-x-5">
        {/* -------------search box------------------ */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Course"
            name="search"
            className="px-3 outline-none h-[72px] w-[400px] border bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none "
          />
          {/* --------search button----------- */}
          <button className="absolute top-0 -right-1 h-[72px] w-[72px] bg-primary rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none ">
            <SearchIcon className="h-8 w-8 mx-auto " color="white" />
          </button>
        </div>
        {/* -------------filter button------------------ */}
        <div>
          <button
            className="flex text-xl font-semibold items-center justify-between px-3 h-[72px] w-[400px] border bg-white rounded-tr-[30px] rounded-bl-[30px] rounded-tl-none rounded-br-none "
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            Advanced Filters
            <ChevronDownIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* ----------------------fitler box--------------------- */}
      {filtersOpen && <FilterBox />}
    </div>
  );
};

export default SearchBoxAndFilter;
