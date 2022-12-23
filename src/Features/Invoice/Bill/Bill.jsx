import React from "react";
import { useSelector } from "react-redux";
import { selectedProductList } from "../../invoiceSlice";

function Bill() {
  const productList = useSelector(selectedProductList);
  const totals = productList.reduce((acc, product) => {
    return acc + product.total;
  }, 0);
  const kdv = (totals / 100) * 18;
  return (
    <div className="total mt-4">
      <h1>Billing</h1>
      <div className="flex flex-col items-end">
        <span>total: ${totals || 0}</span>
        <span>kdv:  ${kdv || 0}</span>
        <span>totals: ${totals + kdv || 0}</span>
      </div>
    </div>
  );
}

export default Bill;
