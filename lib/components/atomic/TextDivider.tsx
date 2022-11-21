import {
  Divider,
  DividerProps,
  Flex,
  FlexProps,
  Text,
  TextProps,
} from "@chakra-ui/react";

interface TextDividerProps extends FlexProps {
  content: string;
  dividerProps?: DividerProps;
  contentProps?: TextProps;
}

function TextDivider({
  content,
  dividerProps,
  contentProps,
  ...props
}: TextDividerProps) {
  return (
    <Flex alignItems="center" {...props}>
      <Divider borderColor="blackAlpha.400" {...dividerProps} />
      <Text mx={4} color="blackAlpha.700" fontWeight="light" {...contentProps}>
        {content}
      </Text>
      <Divider borderColor="blackAlpha.400" {...dividerProps} />
    </Flex>
  );
}

export default TextDivider;
