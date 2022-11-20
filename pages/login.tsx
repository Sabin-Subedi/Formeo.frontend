import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { getValidationSchemaObject } from "@helpers/validationSchemas";
import { loginLayout } from "@layout/loginLayout";

import { AppForm, AppFormField } from "@components/Form";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup
  .object()
  .shape(getValidationSchemaObject(Object.keys(initialValues)));

function LoginPage() {
  return (
    <>
      <Flex justifyContent="flex-end" paddingX={5} paddingY={3}>
        <HStack>
          <Text as="span" fontSize="xs">
            Don't have an account yet?
          </Text>
          <Button
            size="sm"
            borderRadius={2}
            colorScheme="blackAlpha"
            type="button"
            variant="outline"
          >
            Sign up
          </Button>
        </HStack>
      </Flex>
      <Flex flexBasis={1}>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(e) => {}}
        >
          <AppFormField name="email" label="Email" type="text" />
        </AppForm>
      </Flex>
    </>
  );
}

LoginPage.getLayout = loginLayout;

export default LoginPage;
