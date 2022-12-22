import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectedProductList } from "../invoiceSlice";
import ProductList from "./ProductList";
import ProductTitle from "./ProductTitle";

function CreateInvoice() {
  const productList = useSelector(selectedProductList);
  const arr = [
    { label: "name", input: "Müşteri adı" },
    { label: "email", input: "Email" },
  ];
  const arr2 = [
    { label: "city", input: "City" },
    { label: "postcode", input: "Post Code" },
    { label: "country", input: "Country" },
  ];
  const dispatch = useDispatch();

  const add = () => {
    const req = {
      id: Date.now(),
      name: "2",
      quantity: "3",
      price: "4",
    };
    dispatch(addProduct(req));
  };

  return (
    <div className="flex flex-1 justify-center items-center p-5 bg-gray-800">
      <div className="w-[600px] h-[600px] bg-gray-900 rounded p-4">
        <form className="flex flex-col text-white">
          <h1 className="text-white text-left text-2xl text-semibold">
            Fatura Bilgileri
          </h1>
          <div className="user_info mt-2 flex flex-col">
            {arr?.map((invoice) => {
              return (
                <div className="flex flex-col mt-2">
                  <label htmlFor={invoice.label} className="text-white">
                    {invoice.input}
                  </label>
                  <input
                    id={invoice.label}
                    type="text"
                    className="focus:outline-none bg-gray-700 text-white pl-1 rounded h-8"
                  />
                </div>
              );
            })}

            <div className="flex flex-row justify-between mt-2">
              {arr2?.map((invoice) => {
                return (
                  <div className="flex flex-col">
                    <label htmlFor={invoice.label} className="text-white">
                      {invoice.input}
                    </label>
                    <input
                      id={invoice.label}
                      type="text"
                      className="focus:outline-none bg-slate-700 text-white rounded h-8 pl-1"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <h1 className="mt-2 text-white text-2xl">Fatura Listesi</h1>

          <div className="w-full flex flex-col mt-2 h-[200px]  scrollbar overflow-auto">
            <ProductTitle />
            {productList?.map((input, i) => {
              return <ProductList key={i} />;
            })}
          </div>
          <button
            type="button"
            onClick={add}
            className="h-8 mt-3 rounded bg-indigo-700 text-white"
          >
            Ekle
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateInvoice;
