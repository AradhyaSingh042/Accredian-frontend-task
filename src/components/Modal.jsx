import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";

const Modal = ({ page, isModalVisible, setIsModalVisible, setModal }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: "",
      referrerEmail: "",
      referrerPhone: "",
      referrerCode: "",
      refereeName: "",
      refereeEmail: "",
      refereePhone: "",
      refereeCode: "",
    },

    onSubmit: (values, actions) => {
      pushData(values);
      actions.resetForm();
      setIsModalVisible(false);
    },

    validationSchema: Yup.object({
      referrerName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "ReferrerName must be valid")
        .required()
        .min(3),
      referrerEmail: Yup.string().email().required(),
      referrerPhone: Yup.string()
        .matches(/^\d{10}$/, "Referrer phone must have 10 digits")
        .required(),
      referrerCode: Yup.string().required(),
      refereeName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Referee name must be valid")
        .required()
        .min(3),
      refereeEmail: Yup.string().email().required(),
      refereePhone: Yup.string()
        .matches(/^\d{10}$/, "Referee phone must have 10 digits")
        .required(),
      refereeCode: Yup.string().required(),
    }),
  });

  async function pushData(formData) {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}/pushData`;
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await resp.json();
      console.log(data);
    } catch (e) {
      console.log(e);
      console.error(e.message);
    }
  }

  return (
    <>
      <form
        className={`modal absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-zinc-800 w-1/2 py-7 px-10 z-50 rounded-2xl shadow-md flex flex-col flex-wrap gap-8 ${
          isModalVisible ? "block" : "hidden"
        }`}
        onSubmit={formik.handleSubmit}
      >
        {page === 1 ? (
          <h3 className="text-white font-semibold text-2xl font-inter">
            Fill out the Referrer Details
          </h3>
        ) : (
          <h3 className="text-white font-semibold text-2xl font-inter">
            Fill out the Referee Details
          </h3>
        )}

        <div className="w-full flex flex-row gap-8">
          <div className="name-container flex w-full flex-col gap-3">
            {page === 1 ? (
              <input
                className="border-2 w-full border-zinc-500 bg-transparent outline-none py-2 px-4 rounded-md text-white"
                type="text"
                placeholder="Full Name"
                name="referrerName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.referrerName}
              />
            ) : (
              <input
                className="border-2 w-full border-zinc-500 bg-transparent outline-none py-2 px-4 rounded-md text-white"
                type="text"
                placeholder="Full Name"
                name="refereeName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.refereeName}
              />
            )}

            {page === 1 &&
              formik.touched.referrerName &&
              formik.errors.referrerName && (
                <p className="font-semibold text-red-600 capitalize -my-1.5">
                  {formik.errors.referrerName}
                </p>
              )}

            {page === 2 &&
              formik.touched.refereeName &&
              formik.errors.refereeName && (
                <p className="font-semibold text-red-600 capitalize -my-1.5">
                  {formik.errors.refereeName}
                </p>
              )}
          </div>

          <div className="email-container flex w-full flex-col gap-3">
            {page === 1 ? (
              <input
                className="border-2 w-full border-zinc-500 bg-transparent outline-none py-2 px-4 rounded-md text-white"
                type="email"
                placeholder="Email ID"
                name="referrerEmail"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.referrerEmail}
              />
            ) : (
              <input
                className="border-2 w-full border-zinc-500 bg-transparent outline-none py-2 px-4 rounded-md text-white"
                type="email"
                placeholder="Email ID"
                name="refereeEmail"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.refereeEmail}
              />
            )}

            {page === 1 &&
              formik.touched.referrerEmail &&
              formik.errors.referrerEmail && (
                <p className="font-semibold text-red-600 capitalize -my-1.5">
                  {formik.errors.referrerEmail}
                </p>
              )}

            {page === 2 &&
              formik.touched.refereeEmail &&
              formik.errors.refereeEmail && (
                <p className="font-semibold text-red-600 capitalize -my-1.5">
                  {formik.errors.refereeEmail}
                </p>
              )}
          </div>
        </div>

        <div className="w-full flex flex-row gap-8">
          <div className="phone-container flex w-full flex-col gap-3">
            {page === 1 ? (
              <input
                className="border-2 w-full border-zinc-500 bg-transparent outline-none py-2 px-4 rounded-md text-white"
                type="tel"
                placeholder="Phone No."
                name="referrerPhone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.referrerPhone}
              />
            ) : (
              <input
                className="border-2 w-full border-zinc-500 bg-transparent outline-none py-2 px-4 rounded-md text-white"
                type="tel"
                placeholder="Phone No."
                name="refereePhone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.refereePhone}
              />
            )}

            {page === 1 &&
              formik.touched.referrerPhone &&
              formik.errors.referrerPhone && (
                <p className="font-semibold text-red-600 capitalize -my-1.5">
                  {formik.errors.referrerPhone}
                </p>
              )}

            {page === 2 &&
              formik.touched.refereePhone &&
              formik.errors.refereePhone && (
                <p className="font-semibold text-red-600 capitalize -my-1.5">
                  {formik.errors.refereePhone}
                </p>
              )}
          </div>

          <div className="code-container flex w-full flex-col gap-3">
            {page === 1 ? (
              <input
                className="border-2 w-full border-zinc-500 bg-transparent outline-none py-2 px-4 rounded-md text-white"
                type="text"
                placeholder="Referral Code"
                name="referrerCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.referrerCode}
              />
            ) : (
              <input
                className="border-2 w-full border-zinc-500 bg-transparent outline-none py-2 px-4 rounded-md text-white"
                type="text"
                placeholder="Referral Code"
                name="refereeCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.refereeCode}
              />
            )}

            {page === 1 &&
              formik.touched.referrerCode &&
              formik.errors.referrerCode && (
                <p className="font-semibold text-red-600 capitalize -my-1.5">
                  {formik.errors.referrerCode}
                </p>
              )}

            {page === 2 &&
              formik.touched.refereeCode &&
              formik.errors.refereeCode && (
                <p className="font-semibold text-red-600 capitalize -my-1.5">
                  {formik.errors.refereeCode}
                </p>
              )}
          </div>
        </div>

        {page === 1 ? (
          <button
            className="bg-teal-600 hover:bg-teal-700 transition-all duration-200 py-2 rounded-md shadow-sm text-white font-medium leading-6 text-[15.2px] font-inter flex flex-row justify-center items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              setModal(2);
            }}
          >
            Next <FaArrowRightLong size="1.1rem" />
          </button>
        ) : (
          <button
            className="bg-teal-600 hover:bg-teal-700 transition-all duration-200 py-2 rounded-md shadow-sm text-white font-medium leading-6 text-[15.2px] font-inter flex flex-row justify-center items-center gap-2"
            disabled={formik.isSubmitting}
            type="submit"
          >
            Submit
          </button>
        )}

        <div className="flex flex-row justify-between items-center">
          <span className="text-zinc-300 text-sm">{page} of 2</span>

          {page === 1 ? (
            <button
              className="bg-slate-300 hover:bg-slate-200 transition-all duration-200 py-2 px-4 rounded-md shadow-sm font-medium leading-6 text-[15.2px] font-inter flex flex-row justify-center items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setIsModalVisible(false);
              }}
            >
              Back
            </button>
          ) : (
            <button
              className="bg-slate-300 hover:bg-slate-200 transition-all duration-200 py-2 px-4 rounded-md shadow-sm font-medium leading-6 text-[15.2px] font-inter flex flex-row justify-center items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setModal(1);
              }}
            >
              <FaArrowLeftLong size="1.1rem" /> Previous
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Modal;
