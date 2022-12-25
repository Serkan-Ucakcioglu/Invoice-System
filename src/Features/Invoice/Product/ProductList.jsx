import TrashSvg from "../../../Assets/TrashSvg";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../invoiceSlice";
import { useForm, useFieldArray, useFormContext } from "react-hook-form";
import { useEffect } from "react";
import AddBtn from "./AddBtn";
import ProductInput from "./ProductInput";

function ProductList({ id }) {
  const dispatch = useDispatch();
  const { watch, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const total = watch("test")?.reduce((acc, arr) => {
    return acc + arr.quantity * arr.price;
  }, 0);

  const onSubmit = (data) => {
    dispatch(updateProduct({ id, data, total }));
  };

  useEffect(() => {
    onSubmit();
  }, [total]);

  useEffect(() => {
    append({ product: "", quantity: 0, price: 0 });
  }, []);

  return (
    <>
      <div className="flex flex-col scrollbar overflow-auto">
        {fields?.map((field, index) => {
          console.log(index, "i");
          return <ProductInput key={field?.id} remove={remove} index={index} />;
        })}
      </div>
      <AddBtn append={append} />
    </>
  );
}

export default ProductList;
