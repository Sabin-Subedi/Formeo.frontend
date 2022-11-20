import { Button, Checkbox, Input } from "@chakra-ui/react";
import React from "react";

export default function getFormFieldItem(type: string): React.FC {
  switch (type) {
    case "button":
      return Button;
    case "checkbox":
      return Checkbox;
    default:
      return Input;
  }
}
