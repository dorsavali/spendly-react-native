import type { ComponentProps } from "react";
import type { Ionicons } from "@expo/vector-icons";

export type CategoryName =
  | "Food"
  | "Transport"
  | "Shopping"
  | "Bills"
  | "Others";

export type Category = {
  id: number;
  title: CategoryName;
  icon: ComponentProps<typeof Ionicons>["name"];
  color: string;
  bgClass: string;
};

export const CATEGORIES: Category[] = [
  { id: 1, title: "Food", icon: "fast-food-outline", color: "#FFB703", bgClass: "bg-[#FFB703]" },
  { id: 2, title: "Transport", icon: "car-outline", color: "#7BDFF2", bgClass: "bg-[#7BDFF2]" },
  { id: 3, title: "Shopping", icon: "cart-outline", color: "#F7A1C4", bgClass: "bg-[#F7A1C4]" },
  { id: 4, title: "Bills", icon: "cash-outline", color: "#85BB65", bgClass: "bg-[#85BB65]" },
  { id: 5, title: "Others", icon: "ellipsis-horizontal-circle-outline", color: "#A78BFA", bgClass: "bg-[#A78BFA]" },
];

export const getCategory = (title: string) =>
  CATEGORIES.find((category) => category.title === title) ?? CATEGORIES[4];
