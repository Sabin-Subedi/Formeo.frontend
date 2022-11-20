import { Formik } from "formik";
import { appFormProps } from "./types";

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: appFormProps) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {children}
    </Formik>
  );
}
