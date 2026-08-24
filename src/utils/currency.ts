import { Currency } from "../store/SettingStore";
import type { Language } from "../store/SettingStore";


const symbols = {
  EUR: "€",
  USD: "$",
  GBP: "£",
  TOMAN: "تومان",
};

export const formatCurrency = (
  amount: number,
  currency: Currency,
  language: Language = "en",
) => {
  const formattedAmount = formatNumber(amount, language);

  return currency === "TOMAN"
    ? `${formattedAmount} ${symbols.TOMAN}`
    : `${symbols[currency]}${formattedAmount}`;
};

export const formatNumber = (value: number, language: Language = "en") => {
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);

  return language === "fa"
    ? toPersianDigits(formatted)
    : formatted;
};

export const toPersianDigits = (value: string) =>
  value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

export const normalizeNumberInput = (value: string) =>
  value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[,٬]/g, "");
