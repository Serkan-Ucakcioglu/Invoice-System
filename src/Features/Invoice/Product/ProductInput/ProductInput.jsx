import React from "react";
import TrashSvg from "../../../../Assets/TrashSvg";
import { useFormContext } from "react-hook-form";
function ProductInput({ field, remove, index }) {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="flex items-center h-8 mt-8">
      <div className="flex flex-col">
        <input
          id="ürün"
          {...register(`data[${index}].product`, {
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
          defaultValue={field?.product}
          className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">
          {errors.data?.[index]?.product?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <input
          id="adet"
          type="number"
          {...register(`data.${index}.quantity`, {
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
          {errors.data?.[index]?.quantity?.message}
        </span>
      </div>
      <div className="flex flex-col">
        {" "}
        <input
          id="price"
          type="number"
          {...register(`data.${index}.price`, {
            required: "required!",
            min: {
              value: 10,
              message: "min:10",
            },
            max: {
              value: 100000,
              message: "max:100000",
            },
            pattern: {
              value: /[0-9][^a-zA-Z]/g,
            },
          })}
          defaultValue={field?.price}
          className="mr-2 pl-2 w-12 px-2 bg-gray-700 h-8 rounded outline-none"
        />
        <span className="text-red-500 text-left">
          {" "}
          {errors.data?.[index]?.price?.message}
        </span>
      </div>

      <div className="text-white">
        ${watch("data")[index].quantity * watch("data")[index].price || ""}
      </div>
      <div className="ml-auto inline" onClick={() => remove(index)}>
        <TrashSvg />
      </div>
    </div>
  );
}

export default ProductInput;
