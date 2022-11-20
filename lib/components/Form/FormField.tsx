import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import getFormFieldItem from "@helpers/formFieldHelper";
import { Field, FormikContext, FormikHandlers, useFormikContext } from "formik";
import React from "react";

interface appFormFieldProps {
  name: string;
  type?: "text" | "textarea" | "file" | "password";
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  label: string;
  onChange?: FormikHandlers["handleChange"];
  helpText?: string;
}

function AppFormField({
  name,
  required = false,
  disabled = false,
  readOnly = false,
  invalid,
  label,
  type = "text",
  onChange,
  helpText,
}: appFormFieldProps) {
  const { errors, touched, handleChange, handleBlur } = useFormikContext<any>();
  const error = errors && touched[name] && errors[name];
  const isInvalid = Boolean(invalid || error);
  const FormInput = React.useMemo(() => getFormFieldItem(type), []);
  return (
    <FormControl
      isDisabled={disabled}
      isReadOnly={readOnly}
      isRequired={required}
      isInvalid={isInvalid}
      onBlur={handleBlur}
      onChange={onChange || handleChange}
    >
      <FormLabel>{label}</FormLabel>
      <FormInput />
      {!isInvalid ? (
        <FormHelperText>{helpText}</FormHelperText>
      ) : (
        typeof error === "string" && (
          <FormErrorMessage>{error}</FormErrorMessage>
        )
      )}
    </FormControl>
  );
}

export default AppFormField;
