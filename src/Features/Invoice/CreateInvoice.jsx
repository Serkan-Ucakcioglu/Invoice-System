import React from "react";

function CreateInvoice() {
  return (
    <div className="flex flex-1 justify-center p-5 bg-gray-800">
      <div className="w-[600px] h-[600px] bg-black rounded p-4">
        <form className="flex flex-col text-white">
          <h1 className="text-white text-left text-2xl text-semibold">
            Fatura Bilgileri
          </h1>
          <div className="user_info mt-2 flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white">
                Müşteri Adı
              </label>
              <input
                id="name"
                type="text"
                className="focus:outline-none bg-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="focus:outline-none bg-gray-700 text-white"
              />
            </div>
            <div className="flex  justify-around mt-2">
              <div className="flex flex-col">
                {" "}
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  className="focus:outline-none bg-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <label htmlFor="postcode">Post Code</label>
                <input
                  type="text"
                  id="postcode"
                  className="focus:outline-none bg-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  className="focus:outline-none bg-gray-700 text-white"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateInvoice;
