import React from "react";
import { View, Text } from "react-native";


interface AuthLogoProps {
  /** Controls the size of the logo. Default: "md" */
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: {
    container: "size-10 rounded-tr-2xl rounded-bl-2xl",
    text: "text-xl",
  },
  md: {
    container: "size-14 rounded-tr-3xl rounded-bl-3xl",
    text: "text-3xl",
  },
  lg: {
    container: "size-20 rounded-tr-[28px] rounded-bl-[28px]",
    text: "text-4xl",
  },
  xl: {
    container: "size-28 rounded-tr-[40px] rounded-bl-[40px]",
    text: "text-5xl",
  },
};

export default function AuthLogo({ size = "md" }: AuthLogoProps) {
  const { container, text } = sizeMap[size];

  return (
    <View
      className={`items-center justify-center bg-accent ${container}`}
      // top-left     → sharp (no radius)
      // top-right    → rounded ✓ (rounded-tr-*)
      // bottom-left  → rounded ✓ (rounded-bl-*)
      // bottom-right → sharp (no radius)
    >
      <Text className={`font-sans-extrabold text-background ${text}`}>
        R
      </Text>
    </View>
  );
}