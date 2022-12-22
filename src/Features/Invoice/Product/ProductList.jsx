import React from "react";
import TrashSvg from "../../../Assets/TrashSvg";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../invoiceSlice";

function ProductList({ id }) {
  const dispatch = useDispatch();
  const deleteProducts = () => {
    dispatch(deleteProduct(id));
  };
  return (
    <div className="flex h-8  mt-2 ">
      <input
        id="ürün"
        type="text"
        className="mr-2  bg-gray-700 h-8 rounded outline-none"
      />{" "}
      <input
        id="adet"
        type="number"
        className="mr-2 w-12 bg-gray-700 h-8 rounded outline-none"
      />{" "}
      <input
        id="price"
        type="number"
        className="mr-2 w-12 px-2 bg-gray-700 h-8 rounded outline-none"
      />
      <div className="text-white">bedava</div>
      <div className="w-full flex justify-end" onClick={deleteProducts}>
        <TrashSvg />
      </div>
    </div>
  );
}

export default ProductList;
