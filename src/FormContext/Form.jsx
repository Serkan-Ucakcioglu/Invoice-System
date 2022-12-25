import { useForm, FormProvider } from "react-hook-form";

export default function Form({ children }) {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
}
