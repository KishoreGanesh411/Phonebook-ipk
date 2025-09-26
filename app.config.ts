import { ConfigContext, ExpoConfig } from "expo/config";

type Extra = {
  EXPO_PUBLIC_API_URL?: string;
};

export default ({ config }: ConfigContext): ExpoConfig => {
  const extra = (config.extra ?? {}) as Extra;

  return {
    ...config,
    name: "Ipk-PhoneBook",
    slug: "Ipk-PhoneBook",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    extra: {
      EXPO_PUBLIC_API_URL: extra.EXPO_PUBLIC_API_URL ?? process.env.EXPO_PUBLIC_API_URL ?? "https://api.example.com"
    },
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSContactsUsageDescription:
          "IPK PhoneBook needs access to your contacts to sync CRM information with device contacts."
      }
    },
    android: {
      package: "com.ipk.phonebook",
      permissions: ["READ_CONTACTS", "WRITE_CONTACTS", "INTERNET", "VIBRATE"],
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    plugins: [
      ["expo-router"]
    ]
  };
};