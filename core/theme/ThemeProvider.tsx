import { createContext, useContext, useMemo, type PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

import { darkColors, lightColors, type ThemeColors } from "@/core/theme/colors";
import { fontSizes, radii, spacing } from "@/core/theme/tokens";

type Theme = {
  colors: ThemeColors;
  spacing: typeof spacing;
  radii: typeof radii;
  fontSizes: typeof fontSizes;
  scheme: "light" | "dark";
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const scheme = useColorScheme() ?? "light";

  const value = useMemo<Theme>(
    () => ({
      scheme,
      colors: scheme === "dark" ? darkColors : lightColors,
      spacing,
      radii,
      fontSizes
    }),
    [scheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};