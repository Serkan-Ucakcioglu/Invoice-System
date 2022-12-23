import React from "react";
import useCustomer from "../../../Hooks/useCustomer";
import Info from "./Info";

function Customer() {
  const { info, info2 } = useCustomer();
  return (
    <>
      <h1 className="text-white text-left text-2xl text-semibold">
        Fatura Bilgileri
      </h1>
      <div className="user_info mt-2 flex flex-col">
        {info?.map((invoice) => {
          return (
            <Info
              invoice={invoice}
              classname="focus:outline-none bg-gray-700 text-white pl-1 rounded h-8"
            />
          );
        })}
        <div className="flex flex-row justify-between mt-2">
          {info2?.map((invoice) => {
            return (
              <Info
                invoice={invoice}
                classname="focus:outline-none bg-gray-700 text-white pl-1 rounded h-8"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Customer;
