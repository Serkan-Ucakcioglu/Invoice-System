import React from "react";
import { useSelector } from "react-redux";
import { selectedProductList } from "../../invoiceSlice";

function Bill() {
  const productList = useSelector(selectedProductList);
  console.log(productList);
  const productTotal = productList?.map((num) => num.total);
  const total = Number(productTotal);
  const kdv = (total / 100) * 18;
  return (
    <>
      <div className="total mt-4">
        <h1>Billing</h1>
        <div className="flex flex-col items-end">
          <span>Price: ${total || 0}</span>
          <span>Kdv %18:  ${kdv || 0}</span>
          <span>Total: ${total + kdv || 0}</span>
        </div>
      </div>
    </>
  );
}

export default Bill;
