import {
  extendTheme,
  ChakraProvider,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { ReactPropTypes } from "react";

import { Global } from "@emotion/react";

const appTheme = extendTheme({
  colors: {
    slate: {
      "50": "#f8fafc",
      "100": "#f1f5f9",
      "200": "#e2e8f0",
      "300": "#cbd5e1",
      "400": "#94a3b8",
      "500": "#64748b",
      "600": "#475569",
      "700": "#334155",
      "800": "#1e293b",
      "900": "#0f172a",
    },
    dark: {
      "50": "#bfbfbf",
      "100": "#8f8f8f",
      "200": "#3d3d3d",
      "300": "#363636",
      "400": "#2e2e2e",
      "500": "#262626",
      "600": "#1f1f1f",
      "700": "#171717",
      "800": "#0f0f0f",
      "900": "#080808",
    },
    neutral: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#e5e5e5",
      "300": "#d4d4d4",
      "400": "#a3a3a3",
      "500": "#737373",
      "600": "#525252",
      "700": "#404040",
      "800": "#262626",
      "900": "#171717",
    },
    amber: {
      "50": "#fffbeb",
      "100": "#fef3c7",
      "200": "#fde68a",
      "300": "#fcd34d",
      "400": "#fbbf24",
      "500": "#f59e0b",
      "600": "#d97706",
      "700": "#b45309",
      "800": "#92400e",
      "900": "#78350f",
    },
    lime: {
      "50": "#f7fee7",
      "100": "#ecfccb",
      "200": "#d9f99d",
      "300": "#bef264",
      "400": "#a3e635",
      "500": "#84cc16",
      "600": "#65a30d",
      "700": "#4d7c0f",
      "800": "#3f6212",
      "900": "#365314",
    },
    emerald: {
      "50": "#ecfdf5",
      "100": "#d1fae5",
      "200": "#a7f3d0",
      "300": "#6ee7b7",
      "400": "#34d399",
      "500": "#10b981",
      "600": "#059669",
      "700": "#047857",
      "800": "#065f46",
      "900": "#064e3b",
    },
    indigo: {
      "50": "#eef2ff",
      "100": "#e0e7ff",
      "200": "#c7d2fe",
      "300": "#a5b4fc",
      "400": "#818cf8",
      "500": "#6366f1",
      "600": "#4f46e5",
      "700": "#4338ca",
      "800": "#3730a3",
      "900": "#312e81",
    },
    violet: {
      "50": "#f5f3ff",
      "100": "#ede9fe",
      "200": "#ddd6fe",
      "300": "#c4b5fd",
      "400": "#a78bfa",
      "500": "#8b5cf6",
      "600": "#7c3aed",
      "700": "#6d28d9",
      "800": "#5b21b6",
      "900": "#4c1d95",
    },
    fuchsia: {
      "50": "#fdf4ff",
      "100": "#fae8ff",
      "200": "#f5d0fe",
      "300": "#f0abfc",
      "400": "#e879f9",
      "500": "#d946ef",
      "600": "#c026d3",
      "700": "#a21caf",
      "800": "#86198f",
      "900": "#701a75",
    },
    rose: {
      "50": "#fff1f2",
      "100": "#ffe4e6",
      "200": "#fecdd3",
      "300": "#fda4af",
      "400": "#fb7185",
      "500": "#f43f5e",
      "600": "#e11d48",
      "700": "#be123c",
      "800": "#9f1239",
      "900": "#881337",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "sm",
      },
      defaultProps: {
        colorScheme: "dark",
      },
    },
  },
});



interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <ChakraProvider theme={appTheme}>{children}</ChakraProvider>;
}
