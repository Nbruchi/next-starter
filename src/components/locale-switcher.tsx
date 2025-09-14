"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n, Locale } from "@/features/internationalization/i18n-config";
import { useSwitchLocaleHref } from "@/features/internationalization/use-switch-locale-href";

const localeNames: Record<Locale, string> = {
  "en-US": "English",
  "rw-RW": "Kinyarwanda",
};

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const getSwitchLocaleHref = useSwitchLocaleHref();

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] as Locale;

  return (
    <div className="flex gap-2 rounded-lg border bg-gray-50 p-4">
      <span className="text-sm font-medium text-gray-700">Language:</span>
      <div className="flex gap-1">
        {i18n.locales.map(locale => {
          const href = getSwitchLocaleHref(locale);
          const isActive = locale === currentLocale;

          return (
            <Link
              key={locale}
              href={href}
              className={`rounded px-3 py-1 text-sm transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "border bg-white text-gray-700 hover:bg-gray-100"
              }`}>
              {localeNames[locale]}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LocaleSwitcher;
