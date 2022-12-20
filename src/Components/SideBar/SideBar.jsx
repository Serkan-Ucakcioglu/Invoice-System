import React from "react";
import AddInvoice from "../../Assets/AddInvoice";
import Process from "./Process";

function SideBar() {
  const arr = ["Saab", "Volvo", "BMW"];

  return (
    <div className="w-[230px] bg-black h-screen p-5">
      <header className="flex flex-col justify-center items-center border-b border-gray-200">
        <img
          className="w-[80px] h-[80px] rounded"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzF9KnRH0A3_pOqMj8exwrwCLw_G9E7rGLkA&usqp=CAU"
          alt="invoice-image"
        />
        <button
          type="button"
          className="focus:outline-none flex flex-row  mt-4 w-3/3 text-white bg-indigo-900 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <AddInvoice />
          invoice
        </button>
      </header>
      <Process />
    </div>
  );
}

export default SideBar;
