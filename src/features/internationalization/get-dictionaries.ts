import "server-only";

import { Locale } from "./i18n-config";

const dictionaries = {
  "en-US": () =>
    import("./dictionaries/en-us.json").then(module => module.default),
  "rw-RW": () =>
    import("./dictionaries/rw-rw.json").then(module => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries["en-US"]();
