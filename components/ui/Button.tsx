import { ActivityIndicator, Pressable, StyleSheet, ViewStyle } from "react-native";
import { ReactNode } from "react";

import { useTheme } from "@/core/theme/ThemeProvider";
import { Text } from "@/components/ui/Text";

type Props = {
  label: string;
  onPress: () => void | Promise<void>;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  style?: ViewStyle;
};

export const Button = ({ label, onPress, disabled, loading, icon, style }: Props) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      onPress={disabled || loading ? undefined : onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled ? styles.pressed : undefined,
        disabled ? styles.disabled : undefined,
        style
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <>
          {icon}
          <Text tone="default" weight="semibold" style={styles.label}>
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
};

const makeStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    button: {
      minHeight: 48,
      borderRadius: theme.radii.md,
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.lg,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: theme.spacing.sm
    },
    label: {
      color: "#FFFFFF"
    },
    pressed: {
      opacity: 0.85
    },
    disabled: {
      opacity: 0.5
    }
  });