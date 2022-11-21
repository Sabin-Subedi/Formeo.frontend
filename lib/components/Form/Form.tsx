import { Box } from "@chakra-ui/react";
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
      {({ handleSubmit, handleReset }) => (
        <form
          className="fullWidth"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          {children}
        </form>
      )}
    </Formik>
  );
}
