import { Button, Icon, ButtonProps, As, IconProps } from "@chakra-ui/react";
import React from "react";

interface AppButtonProps extends ButtonProps {
  icon?: As;
  children: React.ReactNode;
  iconProps?: IconProps;
  block?: boolean;
}

function AppButton({
  icon,
  children,
  iconProps,
  block,
  ...props
}: AppButtonProps) {
  return (
    <Button
      w={block ? "full" : "max-content"}
      _hover={{
        opacity: 0.9,
      }}
      {...props}
    >
      {icon && <Icon as={icon} {...iconProps} />}
      {children}
    </Button>
  );
}

AppButton.defaultProps = {
  iconProps: {
    mr: 2,
    fontSize: "xl",
  },
};

export default AppButton;
