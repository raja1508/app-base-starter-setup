import clsx from "clsx";
import { ActivityIndicator, Pressable, Text } from "react-native";

interface ButtonProps {
  /** Button label */
  label: string;
  /** Called when the button is pressed */
  onPress: () => void;
  /** Shows a spinner and disables the button */
  loading?: boolean;
  /** Disables the button without showing a spinner */
  disabled?: boolean;
  /** "primary" = filled orange | "secondary" = outlined. Default: "primary" */
  variant?: "primary" | "secondary";
}

export default function Button({
  label,
  onPress,
  loading = false,
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  if (variant === "secondary") {
    return (
      <Pressable
        className={clsx(
          "auth-secondary-button",
          isDisabled && "opacity-50"
        )}
        onPress={onPress}
        disabled={isDisabled}
        android_ripple={{ color: "rgba(234,122,83,0.15)", borderless: false }}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ea7a53" />
        ) : (
          <Text className="auth-secondary-button-text">{label}</Text>
        )}
      </Pressable>
    );
  }

  return (
    <Pressable
      className={clsx(
        "auth-button",
        isDisabled && "auth-button-disabled"
      )}
      onPress={onPress}
      disabled={isDisabled}
      android_ripple={{ color: "rgba(255,255,255,0.2)", borderless: false }}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff9e3" />
      ) : (
        <Text className="auth-button-text">{label}</Text>
      )}
    </Pressable>
  );
}


// Examples
// import AuthButton from "@/components/auth/AuthButton";

// // Primary button
// <AuthButton
//   label="Sign In"
//   onPress={handleSubmit}
//   loading={fetchStatus === "fetching"}
//   disabled={!formValid}
// />

// // Secondary buttons
// <AuthButton
//   variant="secondary"
//   label="Resend Code"
//   onPress={() => signIn.mfa.sendEmailCode()}
//   disabled={fetchStatus === "fetching"}
// />

// <AuthButton
//   variant="secondary"
//   label="Start Over"
//   onPress={() => signIn.reset()}
//   disabled={fetchStatus === "fetching"}
// />