import React from "react";
import { useFormContext } from "react-hook-form";

function Info() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2">
          Müşteri Adı
        </label>
        <input
          {...register("name", {
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
              value: /[^0-9]/g,
              message: "Only letters!",
            },
          })}
          type="text"
          className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">{errors?.name?.message}</span>
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          {...register("email", {
            required: "required!",
            minLength: {
              value: 15,
              message: "Minimum length 5",
            },
            maxLength: {
              value: 50,
              message: "Maximum length 20!",
            },
            pattern: {
              value: /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/g,
              message: "Invalid!",
            },
          })}
          type="email"
          className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">{errors?.email?.message}</span>
      </div>
    </div>
  );
}

export default Info;
