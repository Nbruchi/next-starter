import { usePathname } from "next/navigation";

import { type Locale, localeUrlCodes } from "./i18n-config";

export const useSwitchLocaleHref = () => {
  const pathname = usePathname();

  const getSwitchLocaleHref = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    const urlCode = localeUrlCodes[locale];
    segments[1] = urlCode;
    return segments.join("/");
  };

  return getSwitchLocaleHref;
};
