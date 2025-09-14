"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { i18n, Locale } from "@/features/internationalization/i18n-config";
import { useSwitchLocaleHref } from "@/features/internationalization/use-switch-locale-href";

const localeNames: Record<Locale, { name: string; flag: string }> = {
  "en-US": { name: "English", flag: "🇺🇸" },
  "rw-RW": { name: "Kinyarwanda", flag: "🇷🇼" },
};

const AdvancedLocaleSwitcher = () => {
  const pathname = usePathname();
  const getSwitchLocaleHref = useSwitchLocaleHref();
  const [isOpen, setIsOpen] = useState(false);

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] as Locale;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        <span>{localeNames[currentLocale].flag}</span>
        <span>{localeNames[currentLocale].name}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="py-1">
            {i18n.locales.map(locale => {
              const href = getSwitchLocaleHref(locale);
              const isActive = locale === currentLocale;

              return (
                <Link
                  key={locale}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}>
                  <span className="text-lg">{localeNames[locale].flag}</span>
                  <span>{localeNames[locale].name}</span>
                  {isActive && (
                    <svg
                      className="ml-auto h-4 w-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedLocaleSwitcher;
