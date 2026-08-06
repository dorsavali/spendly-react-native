import type { ReactNode } from "react";
import {
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

interface AppButtonProps extends PressableProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  textClassName?: string;
}

export default function AppButton({
  children,
  variant = "primary",
  className = "",
  textClassName = "",
  disabled,
  ...props
}: AppButtonProps) {
  const buttonVariant =
    variant === "primary"
      ? "bg-white"
      : "border border-primary bg-primary";

  const textVariant =
    variant === "primary"
      ? "text-text-primary"
      : "text-white";

  return (
    <Pressable
      disabled={disabled}
      className={`
        items-center justify-center
        rounded-xl px-4 py-3
        active:opacity-70
        disabled:opacity-40
        ${buttonVariant}
        ${className}
      `}
      {...props}
    >
      <Text
        className={`
          font-poppins-semibold text-base
          ${textVariant}
          ${textClassName}
        `}
      >
        {children}
      </Text>
    </Pressable>
  );
}
