import React from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectedObj } from "../../invoiceSlice";

function CityInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const selecteds = useSelector(selectedObj);
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <label htmlFor="city" className="mb-2">
          City
        </label>
        <input
          defaultValue={selecteds?.city}
          {...register("city", {
            required: "required!",
            minLength: {
              value: 5,
              message: "Minimum length 5",
            },
            maxLength: {
              value: 20,
              message: "Maximum length 20!",
            },
            pattern: {
              value: /[a-zA-Z][^0-9]/g,
              message: "Only letters!",
            },
          })}
          type="text"
          className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">{errors?.city?.message}</span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="postcode" className="mb-2">
          Post Code
        </label>
        <input
          defaultValue={selecteds?.postcode}
          {...register("postcode", {
            required: "required!",
            min: 0,
            pattern: {
              value: /[^a-zA-Z]/g,
              message: "Only Numbers!",
            },
          })}
          type="number"
          className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">
          {errors?.postcode?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="country" className="mb-2">
          Country
        </label>
        <input
          defaultValue={selecteds?.country}
          {...register("country", {
            required: "required!",
            minLength: {
              value: 3,
              message: "Minimum length 5",
            },
            maxLength: {
              value: 20,
              message: "Maximum length 20!",
            },
            pattern: {
              value: /[^0-9]/g,
              message: "Only letters!",
            },
          })}
          type="text"
          className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">
          {errors?.country?.message}
        </span>
      </div>
    </div>
  );
}

export default CityInfo;
