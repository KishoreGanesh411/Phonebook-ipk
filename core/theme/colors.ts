export const lightColors = {
  background: "#F9FAFB",
  card: "#FFFFFF",
  text: "#101828",
  muted: "#667085",
  border: "#E4E7EC",
  primary: "#465FFF",
  success: "#12B76A",
  error: "#F04438"
} as const;

export const darkColors = {
  background: "#0C111D",
  card: "#1A2231",
  text: "#F0F2F5",
  muted: "#98A2B3",
  border: "#2C3448",
  primary: "#758BFF",
  success: "#32D583",
  error: "#F97066"
} as const;

export type ThemeColors = typeof lightColors;