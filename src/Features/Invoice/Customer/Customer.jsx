import React from "react";

function Customer() {
  const arr = [
    { label: "name", input: "Müşteri adı" },
    { label: "email", input: "Email" },
  ];
  const arr2 = [
    { label: "city", input: "City" },
    { label: "postcode", input: "Post Code" },
    { label: "country", input: "Country" },
  ];
  return (
    <>
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
    </>
  );
}

export default Customer;
