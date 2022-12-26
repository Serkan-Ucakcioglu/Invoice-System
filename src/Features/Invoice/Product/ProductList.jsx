import { useFieldArray, useFormContext } from "react-hook-form";
import { useEffect } from "react";
import AddBtn from "./AddBtn";
import ProductInput from "./ProductInput/ProductInput";

function ProductList() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  useEffect(() => {
    append({ product: "", quantity: 0, price: 0 });
  }, []);

  return (
    <>
      <div className="flex flex-col scrollbar overflow-auto">
        {fields?.map((field, index) => {
          return <ProductInput key={field?.id} remove={remove} index={index} />;
        })}
      </div>
      <AddBtn append={append} />
    </>
  );
}

export default ProductList;
