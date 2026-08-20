import { Currency } from "../store/SettingStore";


const symbols = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

export const formatCurrency = (
  amount: number,
  currency: Currency
) => {
  return `${symbols[currency]}${amount.toLocaleString()}`;
};