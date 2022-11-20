import * as yup from "yup";

type GenericObject = { [key: string]: any };

const objectSchema: GenericObject = {
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter your email address")
    .label("Email"),
  password: yup
    .string()
    .required("Please enter your password")
    .label("Password"),
};

export function getValidationSchemaObject(validationFieldKeys: string[]) {
  const validationSchemaKeys = Object.keys(objectSchema);
  const validationSchemaObj = {} as GenericObject;

  validationFieldKeys.forEach((item) => {
    if (!validationSchemaKeys.includes(item)) {
      throw new Error(`Given ${item} is not a valid validation schema key.`);
    }

    Object.assign(validationSchemaObj, {
      item: objectSchema[item],
    });
  });

  return validationSchemaObj;
}

export default objectSchema;
