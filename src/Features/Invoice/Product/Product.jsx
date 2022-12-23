import React from "react";
import { useSelector } from "react-redux";
import { selectedProductList } from "../../invoiceSlice";
import ProductList from "./ProductList";

function Product({ watch, register }) {
  const productList = useSelector(selectedProductList);
  return (
    <>
      {productList?.map((input) => {
        return (
          <ProductList
            key={input?.id}
            id={input?.id}
            watch={watch}
            register={register}
          />
        );
      })}
    </>
  );
}

export default Product;
