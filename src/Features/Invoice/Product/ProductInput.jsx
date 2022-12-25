import React from "react";
import TrashSvg from "../../../Assets/TrashSvg";
import { useFormContext } from "react-hook-form";

function ProductInput({ field, remove, index }) {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useFormContext();
  const test = watch("test");

  return (
    <div className="flex items-center h-8 mt-8">
      <div className="flex flex-col">
        <input
          id="ürün"
          {...register(`test[${index}].product`, {
            required: "required!",
            minLength: {
              value: 5,
              message: "Minimum length 5!",
            },
            maxLength: {
              value: 20,
              message: "Maximum length 20!",
            },
            pattern: {
              value: /[^0-9]/g,
              message: "Only Letters",
            },
          })}
          control={control}
          type="text"
          className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">
          {errors.test?.[index]?.product?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <input
          id="adet"
          type="number"
          {...register(`test.${index}.quantity`, {
            required: "required!",
            min: {
              value: 1,
              message: "min:1",
            },
            max: {
              value: 1000,
              message: "max:1000",
            },
            pattern: {
              value: /[0-9][^a-zA-Z]/g,
            },
          })}
          className="mr-2 pl-2 w-12 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">
          {" "}
          {errors.test?.[index]?.quantity?.message}
        </span>
      </div>
      <div className="flex flex-col">
        {" "}
        <input
          id="price"
          type="number"
          {...register(`test.${index}.price`, {
            required: "required!",
            min: {
              value: 10,
              message: "min:1",
            },
            max: {
              value: 100000,
              message: "max:100000",
            },
            pattern: {
              value: /[0-9][^a-zA-Z]/g,
            },
          })}
          className="mr-2 pl-2 w-12 px-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">
          {" "}
          {errors.test?.[index]?.price?.message}
        </span>
      </div>

      <div className="text-white">
        ${watch("test")[index].quantity * watch("test")[index].price || ""}
      </div>
      <div className="ml-auto inline" onClick={() => remove(index)}>
        <TrashSvg />
      </div>
    </div>
  );
}

export default ProductInput;
