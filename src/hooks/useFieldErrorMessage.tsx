import { FormikErrors, FormikTouched } from "formik";

interface Props<T> {
  errors: FormikErrors<T>;
  touched: FormikTouched<T>;
}

export function useFieldErrorMessage<T>({ errors, touched }: Props<T>) {
  return (field: keyof T) => touched[field] && errors[field];
}
