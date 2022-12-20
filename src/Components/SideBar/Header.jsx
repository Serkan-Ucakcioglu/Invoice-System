import React from "react";
import AddInvoice from "../../Assets/AddInvoice";

function Header() {
  return (
    <header className="flex flex-col justify-center pb-2 items-center border-b border-gray-200 mb-4">
      <img
        className="w-[80px] h-[80px] rounded"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzF9KnRH0A3_pOqMj8exwrwCLw_G9E7rGLkA&usqp=CAU"
        alt="invoice-image"
      />
      <button
        type="button"
        className="focus:outline-none flex flex-row  mt-4 w-3/3 text-white bg-indigo-700 hover:bg-indigo-800 font-medium text-sm px-5 py-2.5 mb-2"
      >
        <AddInvoice />
        invoice
      </button>
    </header>
  );
}

export default Header;
