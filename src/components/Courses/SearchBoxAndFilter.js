import React, { useEffect, useState } from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { BiDollar } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useUserContext } from "../../context/usercontext";
import axios from "axios";
import { toast } from "react-toastify";

const SearchBoxAndFilter = ({
  handleSearchCourse,
  setSearchCourse,
  setRating,
  setMinPrice,
  setMaxPrice,
  setCategoriesId,
  rating,
  handleFilterCourse,
  categoriesId,
  maxPrice,
  minPrice,
}) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);

  const { userLanguage } = useUserContext();
  const { t } = useTranslation();

  // fetch data when page loads up first time
  useEffect(() => {
    axios("https://chessmafia.com/php/luxgap/App/api/get-category", {
      method: "POST",
      params: {
        lang_code: userLanguage,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const Categories = response?.data?.data;
        if (response?.data?.status === "Success") {
          setCategories(Categories);
          return true;
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "Error") {
          return false;
        }
      });
    axios("https://chessmafia.com/php/luxgap/App/api/get-skill", {
      method: "POST",
      params: {
        lang_code: userLanguage,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          setSkills(response?.data?.data);
          return true;
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "Error") {
          return false;
        }
      });
  }, []);

  const handleClearFilters = () => {
    setRating([0]);
    setCategoriesId([0]);
    setMinPrice(0);
    setMaxPrice([0]);
  };
  return (
    <div className="sm:p-10 p-3">
      <div className="flex lg:justify-end justify-center lg:space-x-5 mb-5 flex-wrap items-start ">
        {/* -------------search box------------------ */}
        <div className="relative lg:mb-0 mb-5 sm:w-auto w-full">
          <input
            type="text"
            placeholder={t("search_course")}
            name="search"
            onChange={(e) => setSearchCourse(e.target.value.toLowerCase())}
            className="px-3 outline-none h-[72px] sm:w-[400px] w-full border bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none "
          />
          {/* --------search button----------- */}(
          <button
            type="button"
            onClick={handleSearchCourse}
            className="absolute top-0 -right-1 h-[72px] w-[72px] active:scale-95 transition-all duration-200 ease-in-out bg-primary rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none "
          >
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
        {filtersOpen && (
          <>
            {/* --------------filters box--------------- */}
            <div className="bg-white my-8 sm:p-10 p-3 w-full h-auto border shadow-2xl rounded-tl-[184px] rounded-br-[184px] rounded-bl-none rounded-tr-none ">
              {/* -----------grid first div--------------- */}
              <div className="grid w-full lg:grid-cols-2 p-10 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 md:items-start sm:gap-5 xl:justify-items-center justify-items-start items-center">
                {/* ------------------firrst column-------------- */}
                <div>
                  <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">
                    List of Categories
                  </p>
                  {categories.map((category) => (
                    <div key={category?.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        value={category?.category_details?.category_id}
                        onChange={(e) =>
                          setCategoriesId([...categoriesId, e.target.value])
                        }
                        className="rounded-xl cursor-pointer w-7 h-7 mr-4"
                      />
                      <span className="text-xl font-semibold w-full">
                        {category?.category_details?.category_name}
                      </span>
                    </div>
                  ))}
                </div>
                {/* ------------------second column-------------- */}

                <div>
                  <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">
                    Skills
                  </p>
                  {skills.map((skill,index) => (
                    <div
                      key={index}
                      className="flex items-center mb-2"
                    >
                      <input
                        type="checkbox"
                        value={skill?.skills_id}
                        className="rounded-xl cursor-pointer w-7 h-7 mr-4"
                      />
                      <span className="text-xl font-semibold w-full">
                        {skill.skills_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* --------------dashed line-------------- */}
              <div className="border-dashed border-2 border-[#C4C4C4] w-full " />

              {/* ------------------second grid div------------- */}
              <div className="grid w-full lg:grid-cols-2 p-10 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 md:items-start sm:gap-5 xl:justify-items-center justify-items-start items-center">
                {/* ------------------first column-------------- */}
                <div>
                  <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">
                    Ratings
                  </p>
                  {/* -----------5 star---------- */}
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      // checked={ false}
                      value={5}
                      onChange={(e) =>
                        setRating([...rating, parseInt(e.target.value)])
                      }
                      className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                    />
                    <p className="text-xl flex font-semibold whitespace-nowrap">
                      <StarIcon className="h-5 w-5 " />
                      <StarIcon className="h-5 w-5 " />
                      <StarIcon className="h-5 w-5 " />
                      <StarIcon className="h-5 w-5 " />
                      <StarIcon className="h-5 w-5 " />
                    </p>
                  </div>

                  {/* -----------4 star---------- */}
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      value={4}
                      onChange={(e) =>
                        setRating([...rating, parseInt(e.target.value)])
                      }
                      className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                    />
                    <p className="text-xl flex font-semibold whitespace-nowrap">
                      <StarIcon className="h-5 w-5 " />
                      <StarIcon className="h-5 w-5 " />
                      <StarIcon className="h-5 w-5 " />
                      <StarIcon className="h-5 w-5 " />
                    </p>
                  </div>

                  {/* -----------3 star---------- */}
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      value={3}
                      onChange={(e) =>
                        setRating([...rating, parseInt(e.target.value)])
                      }
                      className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                    />
                    <p className="text-xl flex font-semibold whitespace-nowrap">
                      <StarIcon className="h-5 w-5 " color="black" />
                      <StarIcon className="h-5 w-5 " />
                      <StarIcon className="h-5 w-5 " />
                    </p>
                  </div>

                  {/* -----------2 star---------- */}
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      value={2}
                      onChange={(e) =>
                        setRating([...rating, parseInt(e.target.value)])
                      }
                      className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                    />
                    <p className="text-xl flex font-semibold whitespace-nowrap">
                      <StarIcon className="h-5 w-5 " color="black" />
                      <StarIcon className="h-5 w-5 " />
                    </p>
                  </div>

                  {/* -----------1 star---------- */}
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      value={1}
                      onChange={(e) =>
                        setRating([...rating, parseInt(e.target.value)])
                      }
                      className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                    />
                    <p className="text-xl flex font-semibold whitespace-nowrap">
                      <StarIcon className="h-5 w-5 " color="black" />
                    </p>
                  </div>
                </div>

                {/* ------------------second column-------------- */}
                <div className="lg:col-span-1 md:col-span-2">
                  <p className="text-2xl text-[#C4C4C4] font-semibold mb-5">
                    Price
                  </p>
                  <div className="flex items-center mb-3 ">
                    <div className="flex-col flex items-start relative">
                      <span className="text-lg font-semibold">min</span>
                      <BiDollar
                        className="bg-[#C4C4C4] rounded-sm absolute h-10 top-[43%] left-0 w-6"
                        color="white"
                      />
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="border rounded-md pl-6 h-10 mr-7 w-20 outline-none"
                      />
                    </div>
                    <div className="flex-col flex items-start relative">
                      <span className="text-lg font-semibold">max</span>
                      <BiDollar
                        className="bg-[#C4C4C4]  w-6 absolute top-[43%] left-0 h-10"
                        color="white"
                      />
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="border rounded-md pl-6 h-10 mr-7 w-20 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------buttons-------------------- */}
              <div className="text-center flex sm:flex-row flex-col items-center sm:justify-center md:space-y-0 space-y-2">
                <button
                  type="button"
                  className="sm:w-[209px] active:scale-95 transition-all duration-150 ease-in-out w-36 md:mr-5 h-12 font-bold bg-[#E0E0E0] rounded-tl-3xl rounded-br-3xl rounded-bl-none rounded-tr-none "
                  onClick={handleClearFilters}
                >
                  Clear All Filters
                </button>
                <button
                  type="button"
                  className="sm:w-[209px] active:scale-95 transition-all duration-150 ease-in-out w-36 h-12 bg-primary text-white font-bold rounded-tl-3xl rounded-br-3xl rounded-bl-none rounded-tr-none "
                  onClick={handleFilterCourse}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBoxAndFilter;
