import { useSettingsStore, type Language } from "../store/SettingStore";

const translations = {
  en: {
    home: "Home", statistics: "Statistics", add: "Add", transactions: "Transactions", settings: "Settings",
    welcomeBack: "Welcome Back, {{name}}!", totalBalance: "Total Balance", income: "Income", expense: "Expense",
    categories: "Categories", recentTransactions: "Recent Transactions", seeAll: "See all", noTransactions: "No transactions yet",
    addFirstTransaction: "Add your first transaction", addTransaction: "Add Transaction", editTransaction: "Edit Transaction",
    amount: "Amount", enterAmount: "Enter amount", title: "Title", enterTitle: "Enter title", category: "Category",
    chooseCategory: "Choose a category", date: "Date", notesOptional: "Notes (Optional)", enterNotes: "Enter notes",
    saveExpense: "Save Transaction", invalidAmount: "Enter an amount greater than zero", titleRequired: "Title is required",
    categoryRequired: "Choose a category", transactionNotFound: "Transaction not found", transactionDetails: "Transaction Details",
    type: "Type", notes: "Notes", noNotes: "No notes added", deleteTransaction: "Delete Transaction",
    deleteQuestion: "Delete transaction?", deleteMessage: "This transaction will be permanently removed.", cancel: "Cancel", delete: "Delete",
    all: "All", sevenDays: "7 days", thirtyDays: "30 days", newest: "Newest", oldest: "Oldest",
    noTransactionsFound: "No transactions found", tryAnotherFilter: "Try another search or filter", searchTransactions: "Search transactions",
    profile: "Profile", chooseAvatar: "Choose an avatar", username: "Username", usernameRequired: "Username is required",
    chooseUsername: "Choose your username", usernameHint: "This name will appear in your welcome message", continue: "Continue",
    usernameMin: "Enter at least 2 characters", changeUsername: "Change Username", account: "Account", preferences: "Preferences",
    currency: "Currency", toman: "Toman", language: "Language", data: "Data", resetTransactions: "Reset Transactions",
    deleteSavedTransactions: "Delete all saved transactions", resetQuestion: "Reset all transactions?", resetWarning: "This action cannot be undone.", reset: "Reset",
    about: "About", version: "Version", expenseOverview: "Expense Overview", noExpenseData: "No expense data yet",
    addExpenseForCharts: "Add an expense to see charts and spending insights.", week: "Week", year: "Year", expenseByTime: "Expense by Time",
    totalExpense: "Total Expense", noCategoryExpenses: "No expenses in this category", seeAllTransactions: "See All Transactions",
    takeControl: "Take Control of Your Finances", splashDescription: "Easily track, analyze, and optimize your spending in one place", getStarted: "Get Started",
    food: "Food", transport: "Transport", shopping: "Shopping", bills: "Bills", others: "Others",
    navTransactions: "Transactions", navSettings: "Settings",
    shortFood: "Food", shortTransport: "Transport", shortShopping: "Shopping", shortBills: "Bills", shortOthers: "Others",
  },
  de: {
    home: "Start", statistics: "Statistik", add: "Neu", transactions: "Transaktionen", settings: "Einstellungen",
    welcomeBack: "Willkommen zurück, {{name}}!", totalBalance: "Gesamtsaldo", income: "Einnahmen", expense: "Ausgabe",
    categories: "Kategorien", recentTransactions: "Letzte Transaktionen", seeAll: "Alle anzeigen", noTransactions: "Noch keine Transaktionen",
    addFirstTransaction: "Füge deine erste Transaktion hinzu", addTransaction: "Transaktion hinzufügen", editTransaction: "Transaktion bearbeiten",
    amount: "Betrag", enterAmount: "Betrag eingeben", title: "Titel", enterTitle: "Titel eingeben", category: "Kategorie",
    chooseCategory: "Kategorie auswählen", date: "Datum", notesOptional: "Notizen (optional)", enterNotes: "Notizen eingeben",
    saveExpense: "Transaktion speichern", invalidAmount: "Gib einen Betrag größer als null ein", titleRequired: "Titel ist erforderlich",
    categoryRequired: "Wähle eine Kategorie", transactionNotFound: "Transaktion nicht gefunden", transactionDetails: "Transaktionsdetails",
    type: "Typ", notes: "Notizen", noNotes: "Keine Notizen", deleteTransaction: "Transaktion löschen",
    deleteQuestion: "Transaktion löschen?", deleteMessage: "Diese Transaktion wird dauerhaft gelöscht.", cancel: "Abbrechen", delete: "Löschen",
    all: "Alle", sevenDays: "7 Tage", thirtyDays: "30 Tage", newest: "Neueste", oldest: "Älteste",
    noTransactionsFound: "Keine Transaktionen gefunden", tryAnotherFilter: "Versuche eine andere Suche oder einen Filter", searchTransactions: "Transaktionen suchen",
    profile: "Profil", chooseAvatar: "Avatar auswählen", username: "Benutzername", usernameRequired: "Benutzername ist erforderlich",
    chooseUsername: "Wähle deinen Benutzernamen", usernameHint: "Dieser Name erscheint in deiner Begrüßung", continue: "Weiter",
    usernameMin: "Mindestens 2 Zeichen eingeben", changeUsername: "Benutzername ändern", account: "Konto", preferences: "Einstellungen",
    currency: "Währung", toman: "Toman", language: "Sprache", data: "Daten", resetTransactions: "Transaktionen zurücksetzen",
    deleteSavedTransactions: "Alle gespeicherten Transaktionen löschen", resetQuestion: "Alle Transaktionen zurücksetzen?", resetWarning: "Diese Aktion kann nicht rückgängig gemacht werden.", reset: "Zurücksetzen",
    about: "Über", version: "Version", expenseOverview: "Ausgabenübersicht", noExpenseData: "Noch keine Ausgabendaten",
    addExpenseForCharts: "Füge eine Ausgabe hinzu, um Diagramme und Analysen zu sehen.", week: "Woche", year: "Jahr", expenseByTime: "Ausgaben nach Zeit",
    totalExpense: "Gesamtausgaben", noCategoryExpenses: "Keine Ausgaben in dieser Kategorie", seeAllTransactions: "Alle Transaktionen anzeigen",
    takeControl: "Übernimm die Kontrolle über deine Finanzen", splashDescription: "Erfasse, analysiere und optimiere deine Ausgaben an einem Ort", getStarted: "Loslegen",
    food: "Essen", transport: "Transport", shopping: "Einkaufen", bills: "Rechnungen", others: "Sonstiges",
    navTransactions: "Umsätze", navSettings: "Optionen",
    shortFood: "Essen", shortTransport: "Fahrt", shortShopping: "Käufe", shortBills: "Kosten", shortOthers: "Andere",
  },
  fa: {
    home: "خانه", statistics: "آمار", add: "افزودن", transactions: "تراکنش‌ها", settings: "تنظیمات",
    welcomeBack: "خوش آمدی، {{name}}!", totalBalance: "موجودی کل", income: "درآمد", expense: "هزینه",
    categories: "دسته‌بندی‌ها", recentTransactions: "تراکنش‌های اخیر", seeAll: "مشاهده همه", noTransactions: "هنوز تراکنشی وجود ندارد",
    addFirstTransaction: "اولین تراکنش خود را اضافه کنید", addTransaction: "افزودن تراکنش", editTransaction: "ویرایش تراکنش",
    amount: "مبلغ", enterAmount: "مبلغ را وارد کنید", title: "عنوان", enterTitle: "عنوان را وارد کنید", category: "دسته‌بندی",
    chooseCategory: "یک دسته‌بندی انتخاب کنید", date: "تاریخ", notesOptional: "یادداشت (اختیاری)", enterNotes: "یادداشت را وارد کنید",
    saveExpense: "ذخیره تراکنش", invalidAmount: "مبلغی بیشتر از صفر وارد کنید", titleRequired: "عنوان الزامی است",
    categoryRequired: "یک دسته‌بندی انتخاب کنید", transactionNotFound: "تراکنش پیدا نشد", transactionDetails: "جزئیات تراکنش",
    type: "نوع", notes: "یادداشت", noNotes: "یادداشتی ثبت نشده", deleteTransaction: "حذف تراکنش",
    deleteQuestion: "تراکنش حذف شود؟", deleteMessage: "این تراکنش برای همیشه حذف خواهد شد.", cancel: "انصراف", delete: "حذف",
    all: "همه", sevenDays: "۷ روز", thirtyDays: "۳۰ روز", newest: "جدیدترین", oldest: "قدیمی‌ترین",
    noTransactionsFound: "تراکنشی پیدا نشد", tryAnotherFilter: "جست‌وجو یا فیلتر دیگری را امتحان کنید", searchTransactions: "جست‌وجوی تراکنش‌ها",
    profile: "پروفایل", chooseAvatar: "انتخاب آواتار", username: "نام کاربری", usernameRequired: "نام کاربری الزامی است",
    chooseUsername: "نام کاربری خود را انتخاب کنید", usernameHint: "این نام در پیام خوشامدگویی نمایش داده می‌شود", continue: "ادامه",
    usernameMin: "حداقل ۲ کاراکتر وارد کنید", changeUsername: "تغییر نام کاربری", account: "حساب کاربری", preferences: "ترجیحات",
    currency: "واحد پول", toman: "تومان", language: "زبان", data: "داده‌ها", resetTransactions: "پاک‌کردن تراکنش‌ها",
    deleteSavedTransactions: "حذف همه تراکنش‌های ذخیره‌شده", resetQuestion: "همه تراکنش‌ها پاک شوند؟", resetWarning: "این عملیات قابل بازگشت نیست.", reset: "پاک‌کردن",
    about: "درباره", version: "نسخه", expenseOverview: "نمای کلی هزینه‌ها", noExpenseData: "هنوز اطلاعات هزینه‌ای وجود ندارد",
    addExpenseForCharts: "برای مشاهده نمودارها یک هزینه اضافه کنید.", week: "هفته", year: "سال", expenseByTime: "هزینه بر اساس زمان",
    totalExpense: "مجموع هزینه", noCategoryExpenses: "در این دسته‌بندی هزینه‌ای وجود ندارد", seeAllTransactions: "مشاهده همه تراکنش‌ها",
    takeControl: "کنترل امور مالی خود را در دست بگیرید", splashDescription: "هزینه‌های خود را به‌سادگی ثبت، تحلیل و بهینه کنید", getStarted: "شروع",
    food: "غذا", transport: "حمل‌ونقل", shopping: "خرید", bills: "قبوض", others: "سایر",
    navTransactions: "تراکنش‌ها", navSettings: "تنظیمات",
    shortFood: "غذا", shortTransport: "حمل‌ونقل", shortShopping: "خرید", shortBills: "قبوض", shortOthers: "سایر",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export const translate = (language: Language, key: TranslationKey, values?: Record<string, string | number>) => {
  let text: string = translations[language][key] ?? translations.en[key];
  Object.entries(values ?? {}).forEach(([name, value]) => {
    text = text.replace(`{{${name}}}`, String(value));
  });
  return text;
};

export const useTranslation = () => {
  const language = useSettingsStore((state) => state.language);
  return {
    language,
    isRTL: language === "fa",
    t: (key: TranslationKey, values?: Record<string, string | number>) => translate(language, key, values),
  };
};

export const categoryTranslationKey = (category: string): TranslationKey =>
  ({ Food: "food", Transport: "transport", Shopping: "shopping", Bills: "bills", Others: "others" } as const)[category as "Food"] ?? "others";

export const shortCategoryTranslationKey = (category: string): TranslationKey =>
  ({ Food: "shortFood", Transport: "shortTransport", Shopping: "shortShopping", Bills: "shortBills", Others: "shortOthers" } as const)[category as "Food"] ?? "shortOthers";

export const languageLocale = (language: Language) => ({ en: "en-US", de: "de-DE", fa: "fa-IR" })[language];
