import React from "react";
import useCustomer from "../../../Hooks/useCustomer";
import Info from "./Info";

function Customer() {
  return (
    <>
      <h1 className="text-white text-left text-2xl text-semibold">
        Fatura Bilgileri
      </h1>
      <div className="user_info mt-2 flex flex-col">
        <Info /> info
        <div className="flex flex-row justify-between mt-2"></div>
      </div>
    </>
  );
}

export default Customer;
