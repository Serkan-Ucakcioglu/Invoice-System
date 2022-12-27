import { useFieldArray, useFormContext } from "react-hook-form";
import AddBtn from "./AddBtn";
import ProductInput from "./ProductInput/ProductInput";
import { useSelector } from "react-redux";
import { selectedObj } from "../../invoiceSlice";
import { useEffect } from "react";

function ProductList() {
  const selecteds = useSelector(selectedObj);
  const { control, reset } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  useEffect(() => {
    if (selecteds.name) {
      reset({
        test: selecteds.test,
      });
    }
  }, [selecteds.name]);

  return (
    <>
      <div className="flex flex-col scrollbar overflow-auto">
        {fields?.map((item, index) => {
          return (
            <ProductInput
              field={item}
              key={item?.id}
              remove={remove}
              index={index}
            />
          );
        })}
      </div>
      <AddBtn append={append} />
    </>
  );
}

export default ProductList;
