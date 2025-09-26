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
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    web: {
      bundler: "webpack"
    },
    extra: {
      EXPO_PUBLIC_API_URL: extra.EXPO_PUBLIC_API_URL ?? process.env.EXPO_PUBLIC_API_URL ?? "https://api.example.com"
    },
    ios: {
      supportsTablet: true,
      icon: "./assets/images/icon.png",
      infoPlist: {
        NSContactsUsageDescription:
          "IPK PhoneBook needs access to your contacts to sync CRM information with device contacts."
      }
    },
    android: {
      package: "com.ipk.phonebook",
      permissions: ["READ_CONTACTS", "WRITE_CONTACTS", "INTERNET", "VIBRATE"],
      adaptiveIcon: {
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundColor: "#ffffff"
      }
    },
    plugins: [["expo-router"]]
  };
};
