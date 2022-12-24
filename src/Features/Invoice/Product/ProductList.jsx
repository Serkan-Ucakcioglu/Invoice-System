import TrashSvg from "../../../Assets/TrashSvg";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../invoiceSlice";
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect } from "react";
import AddBtn from "./AddBtn";

function ProductList({ id }) {
  const dispatch = useDispatch();
  const { watch, control, register, handleSubmit } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const test = watch("test");
  const total = watch("test")?.reduce((acc, arr) => {
    return acc + arr.quantity * arr.price;
  }, 0);

  const onSubmit = (data) => {
    dispatch(updateProduct({ id, data, total }));
  };

  useEffect(() => {
    onSubmit();
  }, [total]);

  const deleteProducts = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <div
        onClick={handleSubmit(onSubmit)}
        className="flex flex-col scrollbar overflow-auto"
      >
        {fields?.map((field, index) => {
          return (
            <div key={field.id} className="flex items-center h-8  mt-2 ">
              <input
                id="ürün"
                {...register(`test.${index}.product`)}
                type="text"
                className="pl-2 mr-2 bg-gray-700 h-8 rounded outline-none"
              />
              <input
                id="adet"
                type="number"
                {...register(`test.${index}.quantity`)}
                className="mr-2 pl-2 w-12 bg-gray-700 h-8 rounded outline-none"
              />
              <input
                id="price"
                type="number"
                {...register(`test.${index}.price`)}
                className="mr-2 pl-2 w-12 px-2 bg-gray-700 h-8 rounded outline-none"
              />

              <div className="text-white">
                $
                {watch("test")[index].quantity * watch("test")[index].price ||
                  0}
              </div>
              <div className="ml-auto inline" onClick={() => remove(index)}>
                <TrashSvg />
              </div>
            </div>
          );
        })}
      </div>
      <AddBtn append={append} />
    </>
  );
}

export default ProductList;
