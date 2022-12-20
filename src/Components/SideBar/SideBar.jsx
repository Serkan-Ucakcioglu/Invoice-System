import React from "react";
import Header from "./Header";
import Process from "./Process";

function SideBar() {
  const arr = ["Saab", "Volvo", "BMW"];

  return (
    <div className="w-[230px] h-screen bg-gray-900 h-full p-5">
      <Header />
      <div className="h-[650px] overflow-auto scrollbar scroll-smooth">
        {arr.map((top) => {
          return <Process />;
        })}
      </div>
    </div>
  );
}

export default SideBar;
