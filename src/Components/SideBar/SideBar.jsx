import React from "react";
import Header from "./Header";
import Process from "./Process";

function SideBar() {
  const arr = ["Saab", "Volvo", "BMW"];

  return (
    <div className="w-[230px] bg-black h-screen p-5">
      <Header />
      <Process />
    </div>
  );
}

export default SideBar;
