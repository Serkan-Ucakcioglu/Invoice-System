import React from "react";

function SideBar() {
  const arr = ["Saab", "Volvo", "BMW"];

  return (
    <div className="w-[230px] bg-gray-800 h-screen p-5">
      <header className="flex justify-center items-center border-b border-gray-200 pb-4">
        <img
          className="w-[80px] h-[80px] rounded"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzF9KnRH0A3_pOqMj8exwrwCLw_G9E7rGLkA&usqp=CAU"
          alt="invoice-image"
        />
      </header>
      <div className="flex flex-col text-red-500 mt-4">
        <div className="w-full bg-gray-500  mb-2 h-9">se</div>
      </div>
    </div>
  );
}

export default SideBar;
