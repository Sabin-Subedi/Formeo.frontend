import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <IconButton
          size="sm"
          color="transparent"
          onClick={handleClick}
          aria-label="password-icon"
          icon={show ? <FiEye /> : <FiEyeOff />}
        />
      </InputRightElement>
    </InputGroup>
  );
}
