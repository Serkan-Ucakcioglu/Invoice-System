import { useForm, FormProvider, useFormContext } from "react-hook-form";

export default function Form({ children }) {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return <FormProvider {...methods}>{children}</FormProvider>;
}
