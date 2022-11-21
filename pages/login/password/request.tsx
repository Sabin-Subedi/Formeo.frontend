import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { getValidationSchemaObject } from "@helpers/validationSchemas";
import { loginLayout } from "@layout/loginLayout";

import AppButton from "@components/atomic/AppButton";
import AppModal from "@components/atomic/AppModal";
import { AppForm, AppFormField } from "@components/Form";
import { DefaultPageProps } from "@type/main";
import { useState } from "react";
import * as yup from "yup";

const initialValues = {
  email: "",
};

const validationSchema = yup
  .object()
  .shape(getValidationSchemaObject(Object.keys(initialValues)));

function PasswordResetRequest({ appName, Logo }: DefaultPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
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
          <Box>
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
          Forgot password?
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

          <Text fontSize="xs" color="slate.700">
            Type the address linked to your account and we'll send you password
            reset instructions. They might end up in your spam folder, so please
            check there as well.
          </Text>

          <AppButton onClick={() => setModalOpen(true)} mt={5}>
            Send instructions
          </AppButton>
        </AppForm>
      </Flex>
      <AppModal
        title="Roger that!"
        isOpen={modalOpen}
        isCentered
        onClose={() => setModalOpen(false)}
      >
        If the address you just typed matches one of our accounts, we’ll send an
        email there with instructions to reset your password.
        <br />
        <br />
        If you signed up with Google or Microsoft and didn’t set a password in
        Typeform, try to sign in with the method you used to create your
        account.
      </AppModal>
    </>
  );
}

PasswordResetRequest.getLayout = loginLayout;

export default PasswordResetRequest;
