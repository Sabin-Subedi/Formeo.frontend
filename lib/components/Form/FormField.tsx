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
  type?: "text" | "textarea" | "file" | "password" | "email";
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  label: string;
  onChange?: FormikHandlers["handleChange"];
  helpText?: string;
  placeholder?: string;
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
  placeholder,
}: appFormFieldProps) {
  const { errors, touched, handleChange, handleBlur } = useFormikContext<any>();
  const error = errors && touched[name] && errors[name];
  const isInvalid = Boolean(invalid || error);
  const FormInput = React.useMemo(() => getFormFieldItem(type), [type]);

  console.log();

  return (
    <FormControl
      isDisabled={disabled}
      isReadOnly={readOnly}
      isRequired={required}
      isInvalid={isInvalid}
      onChange={onChange || handleChange}
      onBlur={handleBlur}
    >
      <FormLabel fontWeight="normal">{label}</FormLabel>
      <FormInput
        borderRadius={2}
        borderWidth={1}
        outline="none"
        boxShadow="none"
        placeholder={placeholder}
        borderColor="gray.300"
        _focusVisible={{
          boxShadow: "none",
          borderColor: "blackAlpha.800",
        }}
        _invalid={{
          boxShadow: "none",
          borderColor: "red.500",
        }}
        fontWeight="normal"
        name={name}
      />
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
