import { Box, Flex, HStack, Text,Link as ChakraLink } from "@chakra-ui/react";
import { getValidationSchemaObject } from "@helpers/validationSchemas";
import { loginLayout } from "@layout/loginLayout";

import AppButton from "@components/atomic/AppButton";
import TextDivider from "@components/atomic/TextDivider";
import { AppForm, AppFormField } from "@components/Form";
import { DefaultPageProps } from "@type/main";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";
import { GITHUB_OAUTH_URL } from "@constants/env";



const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup
  .object()
  .shape(getValidationSchemaObject(Object.keys(initialValues)));

function LoginPage({ appName, Logo }: DefaultPageProps) {
  return (
    <>
      <Flex w="full" justifyContent="flex-end" paddingX={5} paddingY={3}>
        <HStack>
          <Text as="span" fontSize="xs">
            Don't have an account yet?
          </Text>
          <AppButton
            size="sm"
            borderRadius={2}
            colorScheme="blackAlpha"
            type="button"
            variant="outline"
            width="max-content"
          >
            Sign up
          </AppButton>
        </HStack>
      </Flex>

      <Flex
        direction="column"
        alignItems="center"
        pt={16}
        maxW="18rem"
        w="full"
        flex={1}
      >
        {(Logo || appName) && (
          <Box mb={1}>
            {Logo ? (
              Logo
            ) : (
              <Text fontFamily="mono" fontSize="5xl" as="h1">
                {appName}
              </Text>
            )}
          </Box>
        )}
        <Text mb={5} fontSize="xl" fontFamily="serif">
          Hello, who's this?
        </Text>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(e) => {}}
        >
          <AppFormField
            placeholder="Enter email"
            name="email"
            label="Email"
            type="email"
          />
          <AppFormField name="password" label="Password" type="password" />

          <Text
            as={Link}
            fontSize="xs"
            color="slate.700"
            textDecoration="underline"
            href="/login/password/request"
          >
            Forgot Password?
          </Text>

          <AppButton block mt={3}>
            Log in {appName && `to ${appName}`}
          </AppButton>
          <TextDivider content="OR" my={4} />
          <AppButton block variant="outline" fontSize="md" icon={FcGoogle}>
            Log in with Google
          </AppButton>
          <ChakraLink    
            href={GITHUB_OAUTH_URL}>

          <AppButton
     
            variant="outline"
            fontSize="md"
            icon={AiOutlineGithub}
            mt={3}
            block
          >
            Log in with Github
          </AppButton>
          </ChakraLink>
        </AppForm>
      </Flex>
    </>
  );
}

LoginPage.getLayout = loginLayout;

export default LoginPage;
