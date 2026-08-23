import type { ComponentProps } from "react";
import type { Ionicons } from "@expo/vector-icons";

export type Avatar = {
  id: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  backgroundColor: string;
};

export const AVATARS: Avatar[] = [
  { id: "person-green", icon: "person-outline", backgroundColor: "#2E8B57" },
  { id: "happy-orange", icon: "happy-outline", backgroundColor: "#F59E0B" },
  { id: "glasses-blue", icon: "glasses-outline", backgroundColor: "#3B82F6" },
  { id: "star-purple", icon: "star-outline", backgroundColor: "#8B5CF6" },
  { id: "rocket-red", icon: "rocket-outline", backgroundColor: "#EF4444" },
  { id: "leaf-teal", icon: "leaf-outline", backgroundColor: "#14B8A6" },
  { id: "paw-pink", icon: "paw-outline", backgroundColor: "#EC4899" },
  { id: "sparkles-indigo", icon: "sparkles-outline", backgroundColor: "#6366F1" },
];

export const getAvatar = (id: string) =>
  AVATARS.find((avatar) => avatar.id === id) ?? AVATARS[0];
