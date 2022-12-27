import React from "react";
import { useFormContext } from "react-hook-form";

function Bill() {
  const { watch } = useFormContext();
  const data = watch("data");

  const productTotal = data?.reduce((acc, obj) => {
    return acc + obj.quantity * obj.price;
  }, 0);
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
