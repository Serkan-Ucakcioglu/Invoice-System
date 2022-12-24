import React from "react";
import { useFormContext } from "react-hook-form";

function Info() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col">
      <label htmlFor="name">Müşteri Adı</label>
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
            message: "only letters!",
          },
        })}
        type="text"
        className="text-red-500"
      />
      <span className="text-red-500 text-left">{errors?.name?.message}</span>
    </div>
  );
}

export default Info;
