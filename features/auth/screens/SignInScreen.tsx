import { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

import { IPKLogo } from "@/components/branding/IPKLogo";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/core/theme/ThemeProvider";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { toast } from "@/components/feedback/Toast";

const DEMO_EMAIL = "ipktest@ipkwealth.com";
const DEMO_PASSWORD = "Ipk@2025";

export const SignInScreen = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const router = useRouter();
  const passwordRef = useRef<TextInput>(null);
  const { signIn, signingIn, error } = useAuthStore();
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);

  const handleSubmit = async () => {
    const success = await signIn({ email, password });
    if (success) {
      toast("Signed in successfully");
      router.replace("/(tabs)");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.hero}>
        <IPKLogo size={132} />
        <Text size="xl" weight="bold" style={styles.title}>
          Sign In
        </Text>
        <Text tone="muted" style={styles.subtitle}>
          Access your IPK Wealth CRM from anywhere and follow up with leads instantly.
        </Text>
      </View>

      <View style={styles.form}>
        <Field
          label="Work email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <Field
          ref={passwordRef}
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
          error={error}
        />
        <Button label="Continue" onPress={handleSubmit} loading={signingIn} />
        <Text tone="muted" size="sm" style={styles.hint}>
          Demo account - email: {DEMO_EMAIL} | password: {DEMO_PASSWORD}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const makeStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
      justifyContent: "center",
      gap: theme.spacing.xl
    },
    hero: {
      alignItems: "center",
      gap: theme.spacing.md
    },
    title: {
      letterSpacing: 0.5
    },
    subtitle: {
      textAlign: "center",
      paddingHorizontal: theme.spacing.md
    },
    form: {
      gap: theme.spacing.md
    },
    hint: {
      textAlign: "center"
    }
  });

