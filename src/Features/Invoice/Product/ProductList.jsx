import TrashSvg from "../../../Assets/TrashSvg";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../invoiceSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function ProductList({ id }) {
  const dispatch = useDispatch();
  const { watch, register } = useForm();

  const name = watch("product");
  const quantity = watch("quantity");
  const price = watch("price");
  const total = quantity * price;
  const req = {
    id,
    name,
    price,
    quantity,
    total,
  };

  useEffect(() => {
    if (total > 0) {
      dispatch(updateProduct(req));
    }
  }, [total]);

  const deleteProducts = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="flex items-center h-8  mt-2 ">
      <input
        id="ürün"
        type="text"
        {...register("product", { required: true, pattern: /[^0-9]/g })}
        className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
      />
      <input
        id="adet"
        type="number"
        {...register("quantity", { required: "required!", min: 0, max: 100 })}
        className="mr-2 pl-2 w-12 bg-gray-700 h-8 rounded outline-none"
      />
      <input
        id="price"
        type="number"
        {...register("price", { required: true })}
        className="mr-2 pl-2 w-12 px-2 bg-gray-700 h-8 rounded outline-none"
      />
      <div className="text-white">${quantity * price || 0}</div>
      <div className="ml-auto inline" onClick={deleteProducts}>
        <TrashSvg />
      </div>
    </div>
  );
}

export default ProductList;
