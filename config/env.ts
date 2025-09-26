import Constants from "expo-constants";

type Extra = {
  EXPO_PUBLIC_API_URL?: string;
};

const extra = (Constants.expoConfig?.extra ?? {}) as Extra;

export const env = {
  API_URL: extra.EXPO_PUBLIC_API_URL ?? process.env.EXPO_PUBLIC_API_URL ?? "https://api.example.com"
};