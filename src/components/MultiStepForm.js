import { ErrorMessage, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState(null);

  //   const formik = useFormik({
  //     initialValues: {
  //       firstname: "",
  //       middlename: "",
  //       age: Number,
  //     },
  //     validationSchema: SigninSchema,
  //     onSubmit: async (values) => {
  //       const user = {
  //         firstname: values.firstname,
  //         middlename: values.middlename,
  //         age: values.age,
  //         // profileimage: values.profileimage,
  //       };
  //       console.log("user -> ", user);
  //       // resetForm();
  //     },
  //   });

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };
  const handleNextStep = (newData, final = false) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setActiveStep((prev) => prev + 1);
  };
  const handlePrevStep = (newData, final = false) => {
    setUserData((prev) => ({ ...prev, ...newData }));

    setActiveStep((prev) => prev - 1);
  };
  console.log(userData);
  const steps = [
    <>
      <StepOne next={handleNextStep} data={userData} />
      <StepTwo next={handleNextStep} prev={handlePrevStep} data={userData} />
    </>,
  ];
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div>
      {/* ------------------progrresss bar------------------------ */}
      {/* <div className="flex items-center w-full">
                <div
                  className={`${
                    activeStep === 1 || activeStep === 2
                      ? "bg-primary ring-primary"
                      : "bg-gray-200 ring-gray-200"
                  } rounded-full h-4 w-4  ring ring-offset-2`}
                />
                <div
                  className={`${
                    activeStep === 1 || activeStep === 2
                      ? "bg-primary"
                      : "bg-gray-200"
                  } h-1 w-full`}
                />
                <div
                  className={`${
                    activeStep === 2
                      ? "bg-primary ring-primary"
                      : "bg-gray-200 ring-gray-200"
                  } rounded-full h-4 w-4  ring ring-offset-2`}
                />
                <div
                  className={`${
                    activeStep === 2 ? "bg-primary" : "bg-gray-200"
                  } h-1 w-full`}
                />
                <div
                  className={`${
                    activeStep === 3
                      ? "bg-primary ring-primary"
                      : "bg-gray-200 ring-gray-200"
                  } rounded-full h-4 w-4  ring ring-offset-2`}
                />
              </div> */}
      {steps[activeStep]}
    </div>
  );
};
const stepOneValidationSchema = yup.object({
  first_name: yup.string().required().label("First name"),
  last_name: yup.string().required().label("Last name"),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <p>First Name</p>
          <input name="first_name" />
          <ErrorMessage name="first_name" />

          <p>Last Name</p>
          <input name="last_name" />
          <ErrorMessage name="last_name" />

          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

const stepTwoValidationSchema = yup.object({
  middlename: yup
    .string()
    .required("middle name is required!")
    .min(3, "Too short!")
    .max(30, "Too long!"),
  firstname: yup
    .string()
    .required("first name is required!")
    .min(3, "Too short!")
    .max(30, "Too long!"),
  age: yup
    .number()
    .required("age is required!")
    .typeError("Age is must be a number!!"),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>Email</p>
          <input name="email" />
          <ErrorMessage name="email" />

          <p>Password</p>
          <input name="password" />
          <ErrorMessage name="password" />

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default MultiStepForm;

{
  /* -------------multi step form step-1---------------- */
}
<div className="space-y-7">
  {/* ----------form start from here */}
  <div className="w-full">
    <h1 className="font-bold text-4xl block my-5">Tell us about you</h1>
  </div>

  {/* --------------first name------------------ */}
  <div className="w-full">
    <label className="text-xl font-bold block">Your first name</label>
    <input
      type="text"
      placeholder="first name"
      name="firstname"
      {...getFieldProps("firstname")}
      className={`border px-6 lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
    ${touched.firstname && errors.firstname && "border-2 border-red-400"}
    `}
    />
  </div>
  <ErrorMessage name="firstname" component={TextError} />

  {/* --------------middle name------------------ */}
  <div className="w-full">
    <label className="text-xl font-bold block">Your middle name</label>
    <input
      type="text"
      placeholder="middle email"
      name="middlename"
      {...getFieldProps("middlename")}
      className={`border px-6 lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
    ${touched.middlename && errors.middlename && "border-2 border-red-400"}
    `}
    />
  </div>
  <ErrorMessage name="middlename" component={TextError} />
  {/* --------------age------------------ */}
  <div className="w-full">
    <label className="text-xl font-bold block">Your age</label>
    <input
      type="number"
      placeholder="your age"
      name="age"
      {...getFieldProps("age")}
      className={`border px-6 lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none
    ${touched.age && errors.age && "border-2 border-red-400"}
    `}
    />
  </div>
  <ErrorMessage name="age" component={TextError} />

  {/* ---------------next button-------------- */}
  <div className="w-1/2">
    <button
      type="button"
      className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
    >
      Next
    </button>
  </div>
</div>;
{
  /* -------------multi step form step-2---------------- */
}
<div className="space-y-7">
  <div className="w-full">
    <h1 className="font-bold text-4xl block my-5">Profile Picture</h1>
  </div>
  {/* -----image goes here---------------- */}
  <div className="bg-gray-200 h-40 w-40 rounded-xl">
    {image ? (
      <img
        src={image}
        className="h-full w-full rounded-xl object-cover object-center"
        alt="user"
      />
    ) : (
      <UserIcon className="h-full" color="gray" />
    )}
  </div>

  <div className="relative">
    <p className="font-semibold text-lg mb-2">
      Select your company profile picture
    </p>
    <button
      type="button"
      className="bg-primary text-white  w-40 h-full text-center p-3 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
    >
      Browse
    </button>
    <input
      type="file"
      accept=".jpg, .jpeg, .png"
      onChange={onImageChange}
      className="opacity-0 absolute top-8 left-0 w-40 h-full cursor-pointer"
      {...getFieldProps("profileimage")}
    />
  </div>
  <ErrorMessage name="profileimage" component={TextError} />

  <div className="w-1/2">
    <button
      type="button"
      className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
    >
      Next
    </button>
  </div>
</div>;
{
  /* -------------multi step form final-step---------------- */
}
<div className="space-y-7">
  <h1 className="font-bold text-4xl block my-5">Registration Completed</h1>
  <p className="w-1/2 text-base text-secondary font-normal">
    Thousands company like your are manage their project and team in easy way
  </p>
  <div className="w-1/2">
    <button
      type="button"
      className="border bg-gradient-to-tr text-white text-xl font-semibold from-to to-from lg:w-[400px] w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none"
    >
      Continue to LUX GAP
    </button>
  </div>
</div>;
