import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { ReactPropTypes } from "react";

import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'apercu-pro';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/apercu_bold_pro.otf) format('otf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      @font-face {
        font-family: 'apercu-pro';
        font-style: medium;
        font-weight: 500;
        font-display: swap;
        src: url(/fonts/apercu_medium_pro.otf) format('otf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      @font-face {
        font-family: 'apercu-pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/apercu_regular_pro.otf) format('otf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
  />
);

const appTheme = extendTheme({
  fonts: {
    body: "apercu-pro, ",
    heading: "apercu-pro, ",
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ChakraProvider theme={appTheme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
