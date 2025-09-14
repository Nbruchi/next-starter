import { redirect } from "next/navigation";

import {
  i18n,
  localeUrlCodes,
} from "@/features/internationalization/i18n-config";

const Index = () => {
  // Redirect to the default locale using URL code
  const urlCode = localeUrlCodes[i18n.defaultLocale];
  redirect(`/${urlCode}`);
};

export default Index;
