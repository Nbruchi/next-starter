export const i18n = {
  defaultLocale: "en-US",
  locales: ["en-US", "rw-RW"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

// URL-friendly locale codes (short codes for cleaner URLs)
export const localeUrlCodes = {
  "en-US": "en",
  "rw-RW": "rw",
} as const;

// Reverse mapping from URL codes to full locales
export const urlCodeToLocale = {
  en: "en-US",
  rw: "rw-RW",
} as const;

export type LocaleUrlCode = keyof typeof urlCodeToLocale;
