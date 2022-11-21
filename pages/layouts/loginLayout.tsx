import React from "react";
import { PageLayoutProps } from "@type/layout";
import { Flex } from "@chakra-ui/react";

function LoginLayout({ children }: PageLayoutProps) {
  return (
    <Flex
      minWidth="100vw"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      direction="column"
    >
      {children}
    </Flex>
  );
}

export const loginLayout = (page: React.ReactElement) => {
  return <LoginLayout>{page}</LoginLayout>;
};

export default LoginLayout;
