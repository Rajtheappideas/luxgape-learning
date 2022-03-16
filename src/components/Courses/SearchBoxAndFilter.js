import React, { useState } from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { BiDollar } from "react-icons/bi";
import { FilterBox } from "../index";
import { useTranslation } from "react-i18next";

const SearchBoxAndFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const {t} =useTranslation()
  return (
    <div className="sm:p-10 p-3">
      <div className="flex lg:justify-end justify-center lg:space-x-5 mb-5 flex-wrap items-start ">
        {/* -------------search box------------------ */}
        <div className="relative lg:mb-0 mb-5 sm:w-auto w-full">
          <input
            type="text"
            placeholder={t("search_course")}
            name="search"
            className="px-3 outline-none h-[72px] sm:w-[400px] w-full border bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none "
          />
          {/* --------search button----------- */}
          <button className="absolute top-0 -right-1 h-[72px] w-[72px] bg-primary rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none ">
            <SearchIcon className="h-8 w-8 mx-auto " color="white" />
          </button>
        </div>
        {/* -------------filter button------------------ */}
        <div className="sm:w-auto w-full">
          <button
            className="flex text-xl font-semibold items-center justify-between px-3 h-[72px] sm:w-[400px] w-full  border bg-white rounded-tr-[30px] rounded-bl-[30px] rounded-tl-none rounded-br-none "
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            {t("advanced_filters")}
            <ChevronDownIcon className="h-5 w-5" />
          </button>
        </div>
        {/* ----------------------fitler box--------------------- */}
       
        {filtersOpen && <FilterBox />}
      </div>
    </div>
  );
};

export default SearchBoxAndFilter;
