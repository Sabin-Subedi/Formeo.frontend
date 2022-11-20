import {
  Button,
  ButtonProps,
  Checkbox,
  CheckboxProps,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { PasswordInput } from "@components/Form";
import React from "react";

export default function getFormFieldItem(type: string) {
  switch (type) {
    case "button":
      return Button;
    case "checkbox":
      return Checkbox;
    case "password":
      return PasswordInput;
    default:
      return Input;
  }
}
