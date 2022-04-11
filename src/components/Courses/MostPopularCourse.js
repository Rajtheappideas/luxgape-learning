import React, { Suspense, useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import {
  ArrowRightIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Paginate from "react-paginate";
import axios from "axios";
import { BiDollar } from "react-icons/bi";
import { useUserContext } from "../../context/usercontext";
import { toast } from "react-toastify";
import SkeletonLoading from "../SkeletonLoading";

const MostPopularCourse = ({ courses }) => {
  const [searchCourse, setSearchCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [categoriesId, setCategoriesId] = useState([]);
  const [skillName, setSkillName] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchedCourses, setSearchedCourses] = useState([]);

  const { userLanguage } = useUserContext();

  // ----------pagination logic-------
  const coursesPerPage = 6;
  const pagesVisited = pageNumber * coursesPerPage;
  const displayCourse = courses.slice(
    pagesVisited,
    pagesVisited + coursesPerPage
  );
  const pageCount = Math.ceil(courses.length / coursesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // ------------translation-----
  const { t } = useTranslation();
  // -----------------scroll to top----
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // fetch data when first render
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

  // for clear filters when advance filter close
  useEffect(() => {
    handleClearFilters();
  }, [filtersOpen]);
  // handle search data based on user enter value
  const handleSearchCourse = () => {
    if (searchCourse === "") {
      toast("search field should be filled!", { type: "warning" });
      return false;
    }

    // setLoading(true);
    axios("https://chessmafia.com/php/luxgap/App/api/apply-filter", {
      method: "POST",
      params: {
        lang_code: userLanguage,
        search_text: searchCourse,
        category_id: [],
        max_price: "",
        min_price: "",
        rating: "",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response?.data?.status === "Success") {
          setSearchedCourses(response?.data?.data);
          if (response?.data?.data.length === 0) {
            toast("Course not found!!", { type: "warning" });
            return false;
          }
          setLoading(false);
          return true;
        }
      })
      .catch((err) => {
        console.log("search err->", err?.response);
        if (err?.response?.data?.status === "Error") {
          setLoading(false);
          return false;
        }
      });
    setFilteredCourses([]);
  };

  // handle filter data based on user enter value
  const handleFilterCourse = () => {
    if (
      maxPrice === 0 &&
      categoriesId === [] &&
      skillName === [] &&
      rating === []
    ) {
      toast("Add some filters", { type: "warning" });
      return false;
    }
    let formData = new FormData();
    formData.append("lang_code", userLanguage);
    formData.append("search_text", searchCourse);
    formData.append("category_id", JSON.stringify(categoriesId));
    formData.append("max_price", maxPrice);
    formData.append("min_price", minPrice);
    formData.append("rating", JSON.stringify(rating));
    formData.append("skill_name", JSON.stringify(skillName));

    axios
      .post("https://chessmafia.com/php/luxgap/App/api/apply-filter", formData)

      .then((response) => {
        console.log("res->", response?.data?.data);
        if (response?.data?.status === "Success") {
          setFilteredCourses(response?.data?.data);
          if (response?.data?.data.length === 0) {
            toast("No Courses Found on this filters!!", { type: "warning" });
            return false;
          }
          return true;
        }
      })

      .catch((err) => {
        if (err?.response?.data?.status === "Error") {
          console.log(err?.response?.data);
          return false;
        }
      });
    setSearchedCourses([]);
  };

  // clear filters values
  const handleClearFilters = (e) => {
    setRating([]);
    setCategoriesId([]);
    setSkillName([]);
    setMinPrice(0);
    setMaxPrice(0);
    setFilteredCourses([]);
    setSearchCourse("");
    setSearchedCourses([]);
  };

  const handleChangeSkillName = (e) => {
    if (e.target.checked === true) {
      setSkillName([...skillName, e.target.value]);
    } else if (e.target.checked === false) {
      skillName.splice(e.target.value, 1);
    }
  };
  const handleChangeCategoriesId = (e) => {
    if (e.target.checked === true) {
      setCategoriesId([...categoriesId, parseInt(e.target.value)]);
    } else if (e.target.checked === false) {
      const removeCate = categoriesId.splice(e.target.value, 1);
      setCategoriesId([...removeCate]);
    }
  };
  const handleChangeRating = (e) => {
    if (e.target.checked === true) {
      setRating([...rating, parseInt(e.target.value)]);
    } else if (e.target.checked === false) {
      const removeRating = rating.splice(e.target.value, 1);
      setRating([...removeRating]);
    }
  };
  const stars = [
    {
      id: 5,
      star: (
        <>
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
        </>
      ),
    },
    {
      id: 4,
      star: (
        <>
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
        </>
      ),
    },
    {
      id: 3,
      star: (
        <>
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
        </>
      ),
    },
    {
      id: 2,
      star: (
        <>
          <StarIcon className="h-5 w-5 " />
          <StarIcon className="h-5 w-5 " />
        </>
      ),
    },
    {
      id: 1,
      star: (
        <>
          <StarIcon className="h-5 w-5 " />
        </>
      ),
    },
  ];

  return (
    <div className="sm:p-10 mb-10 p-3">
      {/* --------------------search & filter divs---------------------- */}
      <div className="p-3">
        <div className="flex lg:justify-end justify-center lg:space-x-5 mb-5 flex-wrap items-start ">
          {/* -------------search box------------------ */}
          <div className="relative lg:mb-0 mb-5 sm:w-auto w-full">
            <input
              type="text"
              placeholder={t("search_course")}
              name="search"
              value={searchCourse}
              onChange={(e) => setSearchCourse(e.target.value.toLowerCase())}
              className="px-3 outline-none h-[72px] sm:w-[400px] w-full border bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none "
            />
            {/* --------search button----------- */}
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
              <div className="bg-white sm:my-8 my-2 sm:p-10 p-5 w-full h-auto border shadow-2xl rounded-tl-[184px] rounded-br-[184px] rounded-bl-none rounded-tr-none ">
                {/* -----------first div--------------- */}
                <div className="grid w-full p-10 md:grid-cols-2 grid-cols-1 grid-rows-1 md:items-start sm:gap-5 xl:justify-items-center justify-items-start items-center">
                  {/* ------------------firrst column-------------- */}
                  <div>
                    <p className="text-2xl text-[#C4C4C4] font-semibold sm:mb-5">
                      List of Categories
                    </p>
                    {categories.map((category) => (
                      <div
                        key={category?.id}
                        className="flex items-center mb-2"
                      >
                        <input
                          type="checkbox"
                          value={category?.category_details?.category_id}
                          onChange={handleChangeCategoriesId}
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
                    <p className="text-2xl text-[#C4C4C4] font-semibold sm:mb-5">
                      Skills
                    </p>
                    {skills.map((skill) => (
                      <div
                        key={skill.skills_name}
                        className="flex items-center mb-2"
                      >
                        <input
                          type="checkbox"
                          value={skill?.skills_name}
                          onChange={handleChangeSkillName}
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
                <div className="grid w-full p-10 md:grid-cols-2 grid-cols-1 grid-rows-1 md:items-start sm:gap-5 xl:justify-items-center justify-items-start items-center">
                  {/* ------------------first column-------------- */}
                  <div>
                    <p className="text-2xl text-[#C4C4C4] font-semibold sm:mb-5">
                      Ratings
                    </p>
                    {stars.map((star) => (
                      <div className="flex items-center mb-3" key={star.id}>
                        <input
                          type="checkbox"
                          value={star?.id}
                          onChange={handleChangeRating}
                          className="rounded-xl cursor-pointer w-5 h-5 mr-4"
                        />
                        <p className="text-xl flex font-semibold whitespace-nowrap">
                          {star.star}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* ------------------second column-------------- */}
                  <div>
                    <p className="text-2xl text-[#C4C4C4] font-semibold sm:mb-5">
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
                    className="sm:w-[209px] w-32 h-10 active:scale-95 transition-all duration-150 ease-in-out md:mr-5 font-bold bg-[#E0E0E0] rounded-tl-3xl rounded-br-3xl rounded-bl-none rounded-tr-none "
                    onClick={handleClearFilters}
                  >
                    Clear All Filters
                  </button>
                  <button
                    type="button"
                    className="sm:w-[209px] w-32 h-10 active:scale-95 transition-all duration-150 ease-in-out  bg-primary text-white font-bold rounded-tl-3xl rounded-br-3xl rounded-bl-none rounded-tr-none "
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
      {/* ----------------name of page------------------- */}
      <div className="mb-10 px-3 flex justify-between items-center">
        <p className="text-left font-semibold sm:text-5xl text-3xl sm:mb-7">
          {t("most_popular_course")}
        </p>
      </div>
      {/* --------------------show filtered courses---------------------- */}
      <div className="grid xl:grid-cols-3 grid-flow-row md:grid-cols-2 items-center place-items-center lg:gap-10 md:gap-16 gap-4 min-w-full">
        {/* -------------- rounde div=-------------- */}

        {filteredCourses.length === 0 && searchedCourses.length === 0 ? (
          courses.length === 0 ? (
            <>
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
            </>
          ) : (
            displayCourse.map((course) => (
              <Link
                to={`/courses/aboutcourse/${course?.course_details?.course_id}`}
                key={course?.id}
              >
                <RoundedDiv key={course.id} onClick={ScrollToTop}>
                  <LazyLoadImage
                    src={
                      `https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}` ||
                      null
                    }
                    alt={course?.course_details?.title}
                    className="h-1/2 w-full object-center rounded-tl-[182px] outline-none"
                  />

                  <div className="p-5 sm:space-y-5 space-y-2">
                    <p className="sm:text-3xl text-2xl font-semibold">
                      {course?.course_details?.title}
                    </p>
                    <p className="text-secondary text-xl font-normal truncate text-ellipsis whitespace-nowrap overflow-hidden w-64">
                      {course?.course_details?.about}
                    </p>
                    <div className="flex items-start space-x-1">
                      <StarIcon className="w-8 h-8" color="gold" />
                      <StarIcon className="w-8 h-8" color="gold" />
                      <StarIcon className="w-8 h-8" color="gold" />
                      <StarIcon className="w-8 h-8" color="gold" />
                      <StarIcon className="w-8 h-8" color="gold" />
                    </div>
                    {/* arrow button */}
                    <div className="flex items-center space-x-3">
                      <p className="text-secondary">
                        <span className="font-bold sm:text-2xl text-xl">
                          ${course?.price}
                        </span>
                        /employee
                      </p>
                      <button className="w-10 h-10 bg-black ">
                        <ArrowRightIcon className="p-2" color="white" />
                      </button>
                    </div>
                  </div>
                </RoundedDiv>
              </Link>
            ))
          )
        ) : filteredCourses.length === 0 && searchCourse === "" ? (
          displayCourse.map((course) => (
            <Link
              to={`/courses/aboutcourse/${course?.course_details?.course_id}`}
              key={course.id}
            >
              <RoundedDiv onClick={ScrollToTop}>
                <LazyLoadImage
                  src={
                    `https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}` ||
                    null
                  }
                  alt={course?.course_details?.title}
                  className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
                />

                <div className="p-5 sm:space-y-5 space-y-2">
                  <p className="sm:text-3xl text-2xl font-semibold">
                    {course?.course_details?.title}
                  </p>
                  <p className="text-secondary text-xl font-normal">
                    {course?.course_details?.about}
                  </p>
                  <div className="flex items-start space-x-1">
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="text-secondary">
                      <span className="font-bold text-2xl">
                        ${course.price}
                      </span>
                      /employee
                    </p>
                    <button className="w-10 h-10 bg-black cursor-pointer">
                      <ArrowRightIcon className="p-2" color="white" />
                    </button>
                  </div>
                </div>
              </RoundedDiv>
            </Link>
          ))
        ) : searchedCourses.length === 0 ? (
          filteredCourses.map((course) => (
            <Link
              to={`/courses/aboutcourse/${course?.course_details?.course_id}`}
              key={course.id}
            >
              <RoundedDiv key={course.id} onClick={ScrollToTop}>
                <LazyLoadImage
                  src={
                    `https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}` ||
                    null
                  }
                  alt={course?.course_details?.title}
                  className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
                />

                <div className="p-5 sm:space-y-5 space-y-2">
                  <p className="sm:text-3xl text-2xl font-semibold">
                    {course?.course_details?.title}
                  </p>
                  <p className="text-secondary text-xl font-normal">
                    {course?.course_details?.about}
                  </p>
                  <div className="flex items-start space-x-1">
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="text-secondary">
                      <span className="font-bold text-2xl">
                        ${course.price}
                      </span>
                      /employee
                    </p>
                    <button className="w-10 h-10 bg-black cursor-pointer">
                      <ArrowRightIcon className="p-2" color="white" />
                    </button>
                  </div>
                </div>
              </RoundedDiv>
            </Link>
          ))
        ) : (
          searchedCourses.map((course) => (
            <Link
              to={`/courses/aboutcourse/${course?.course_details?.course_id}`}
              key={course.id}
            >
              <RoundedDiv key={course.id} onClick={ScrollToTop}>
                <LazyLoadImage
                  src={
                    `https://chessmafia.com/php/luxgap/App/${course?.course_details?.image}` ||
                    null
                  }
                  alt={course?.course_details?.title}
                  className="h-1/2 w-full object-center object-cover rounded-tl-[182px]"
                />

                <div className="p-5 sm:space-y-5 space-y-2">
                  <p className="sm:text-3xl text-2xl font-semibold">
                    {course?.course_details?.title}
                  </p>
                  <p className="text-secondary text-xl font-normal">
                    {course?.course_details?.about}
                  </p>
                  <div className="flex items-start space-x-1">
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                    <StarIcon className="w-8 h-8" color="gold" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="text-secondary">
                      <span className="font-bold text-2xl">
                        ${course.price}
                      </span>
                      /employee
                    </p>
                    <button className="w-10 h-10 bg-black cursor-pointer">
                      <ArrowRightIcon className="p-2" color="white" />
                    </button>
                  </div>
                </div>
              </RoundedDiv>
            </Link>
          ))
        )}
      </div>
      {/* ---------------pagination=------------------- */}
      {!loading && (
        <Paginate
          className="flex items-center justify-center space-x-5 mt-5"
          breakLabel="..."
          previousLabel={<ChevronLeftIcon className="h-10" />}
          nextLabel={<ChevronRightIcon className="h-10" />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          disabledClassName={"paginationDisabled"}
          activeClassName={
            "bg-gradient-to-r to-from from-to rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none h-full px-4 py-2 text-white text-xl font-semibold"
          }
        />
      )}
    </div>
  );
};

export default MostPopularCourse;

const RoundedDiv = tw.div`
border relative
rounded-tl-[182px] rounded-tr-0 rounded-br-[182px] rounded-bl-0
  sm:h-[673px] h-[550px] sm:w-[364px] w-72
cursor-pointer`;
