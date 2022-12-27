import React from "react";
import Bill from "./Bill/Bill";
import Product from "./Product/Product";
import ProductTitle from "./Product/ProductTitle";
import { useFormContext } from "react-hook-form";
import Customer from "./Customer/Customer";
import { addProduct, clearSelect, selectedObj } from "../invoiceSlice";
import { useDispatch, useSelector } from "react-redux";

function CreateInvoice() {
  const { handleSubmit, reset } = useFormContext();
  const dispatch = useDispatch();
  const selecteds = useSelector(selectedObj);

  const onSubmit = (data) => {
    dispatch(clearSelect());
    if (selecteds?.id) {
      data.id = selecteds.id;
    } else {
      data.id = Date.now();
    }
    dispatch(addProduct(data));
    reset({
      data: [],
    });
    reset();
  };
  return (
    <div className="flex flex-1 justify-center items-center p-5 bg-gray-800">
      <div className="w-[600px] h-[870px] bg-gray-900 rounded p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-white"
        >
          <Customer />
          <h1 className="mt-2 text-white text-2xl">Fatura Listesi</h1>
          <div className="w-full flex flex-col mt-2 h-[280px]  ">
            <ProductTitle />
            <Product id={Date.now()} />
          </div>
          <Bill />
          <button
            type="submit"
            className="ml-auto mt-8 h-10 w-20 bg-indigo-700 text-white rounded"
          >
            add
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateInvoice;
