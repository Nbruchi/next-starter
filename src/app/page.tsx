import { redirect } from "next/navigation";

import { i18n } from "@/features/internationalization/i18n-config";

const Index = () => {
  redirect(`/${i18n.defaultLocale}`);
};

export default Index;
