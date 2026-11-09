import React from "react";
import { Text, TextInput, View, type TextInputProps } from "react-native";

interface AuthInputProps extends TextInputProps {
  /** Field label rendered above the input */
  label: string;
  /** Called with the new value on every keystroke */
  onChangeText: (value: string) => void;
  /** Current value */
  value: string;
  /** Optional error message shown below the input */
  error?: string;
  /** Marks the input border red when true */
  hasError?: boolean;
}

export default function AuthInput({
  label,
  onChangeText,
  value,
  error,
  hasError,
  placeholder,
  ...rest
}: AuthInputProps) {
  return (
    <View className="auth-field">
      {/* Label */}
      <Text className="auth-label">{label}</Text>

      {/* Input — same auth-input styling + px-5 for a bit more horizontal breathing room */}
      <TextInput
        className={`auth-input px-5 ${hasError ? "auth-input-error" : ""}`}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
        onChangeText={onChangeText}
        {...rest}
      />

      {/* Inline error message */}
      {!!error && <Text className="auth-error">{error}</Text>}
    </View>
  );
}


// Examples
// import AuthInput from "@/components/auth/AuthInput";

// // Email field — replaces the whole <View className="auth-field"> block
// <AuthInput
//   label="Email Address"
//   value={emailAddress}
//   onChangeText={setEmailAddress}
//   placeholder="name@example.com"
//   keyboardType="email-address"
//   autoCapitalize="none"
//   autoComplete="email"
//   onBlur={() => setEmailTouched(true)}
//   hasError={emailTouched && !emailValid}
//   error={
//     (emailTouched && !emailValid ? "Please enter a valid email address" : "") ||
//     errors.fields.identifier?.message
//   }
// />

// // Password field
// <AuthInput
//   label="Password"
//   value={password}
//   onChangeText={setPassword}
//   placeholder="Enter your password"
//   secureTextEntry
//   autoComplete="password"
//   onBlur={() => setPasswordTouched(true)}
//   hasError={passwordTouched && !passwordValid}
//   error={
//     (passwordTouched && !passwordValid ? "Password is required" : "") ||
//     errors.fields.password?.message
//   }
// />

// // Verification code field
// <AuthInput
//   label="Verification Code"
//   value={code}
//   onChangeText={setCode}
//   placeholder="Enter 6-digit code"
//   keyboardType="number-pad"
//   autoComplete="one-time-code"
//   maxLength={6}
//   error={errors.fields.code?.message}
// />