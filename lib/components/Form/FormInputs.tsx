import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export function PasswordInput(props: InputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        {...props}
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement>
        <IconButton
          size="md"
          background="transparent"
          onClick={handleClick}
          aria-label="password-icon"
          icon={show ? <FiEye /> : <FiEyeOff />}
        />
      </InputRightElement>
    </InputGroup>
  );
}
