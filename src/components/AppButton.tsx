import type { ReactNode } from "react";
import {
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

interface AppButtonProps extends PressableProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "danger";
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
  const getButtonVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-white border border-white";

      case "outline":
        return "bg-primary border border-primary";

      case "danger":
        return "bg-red-500 border border-red-500";

      default:
        return "bg-white";
    }
  };

  const getTextVariant = () => {
    switch (variant) {
      case "primary":
        return "text-text-primary";

      case "outline":
        return "text-white";

      case "danger":
        return "text-white";

      default:
        return "text-black";
    }
  };

  return (
    <Pressable
      disabled={disabled}
      className={`
        items-center justify-center
        rounded-xl px-4 py-3
        active:opacity-70
        disabled:opacity-40
        ${getButtonVariant()}
        ${className}
      `}
      {...props}
    >
      <Text
        className={`
          font-poppins-semibold text-base
          ${getTextVariant()}
          ${textClassName}
        `}
      >
        {children}
      </Text>
    </Pressable>
  );
}