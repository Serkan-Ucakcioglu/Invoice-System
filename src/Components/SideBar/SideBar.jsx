import React from "react";
import Header from "./Header";
import Process from "./Process";
import { useSelector } from "react-redux";
import { selectedObj, selectedProductList } from "../../Features/invoiceSlice";

function SideBar() {
  const productList = useSelector(selectedProductList);
  const selecteds = useSelector(selectedObj);
  console.log(selecteds, "selectid");

  return (
    <div className="w-[230px] h-screen bg-gray-900 h-full p-5">
      <Header />
      <div className="h-[650px] overflow-auto scrollbar scroll-smooth">
        {productList?.map((invoice) => {
          return <Process key={invoice?.id} invoice={invoice} />;
        })}
      </div>
    </div>
  );
}

export default SideBar;
