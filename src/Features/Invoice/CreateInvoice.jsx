import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../invoiceSlice";
import Bill from "./Bill/Bill";
import Product from "./Product/Product";
import ProductTitle from "./Product/ProductTitle";
import { useForm } from "react-hook-form";
import Customer from "./Customer/Customer";

function CreateInvoice() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const dispatch = useDispatch();

  const add = () => {
    const req = {
      id: Date.now(),
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    };
    dispatch(addProduct(req));
  };

  return (
    <div className="flex flex-1 justify-center items-center p-5 bg-gray-800">
      <div className="w-[600px] h-[800px] bg-gray-900 rounded p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-white"
        >
          <Customer />
          <h1 className="mt-2 text-white text-2xl">Fatura Listesi</h1>
          <div className="w-full flex flex-col mt-2 h-[200px]  scrollbar overflow-auto">
            <ProductTitle />
            <Product />
          </div>
          <button
            type="button"
            onClick={add}
            className="h-10 mt-3 rounded bg-indigo-700 text-white"
          >
            Ekle
          </button>
          <Bill />
        </form>
      </div>
    </div>
  );
}

export default CreateInvoice;
