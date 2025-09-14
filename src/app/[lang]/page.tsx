import SimpleLocaleExample from "@/components/simple-locale-example";
import CounterComponent from "@/features/counter/counter-component";
import { getDictionary } from "@/features/internationalization/get-dictionaries";
import {
  type LocaleUrlCode,
  urlCodeToLocale,
} from "@/features/internationalization/i18n-config";

const Home = async ({
  params: { lang },
}: {
  params: { lang: LocaleUrlCode };
}) => {
  // Convert URL code to full locale
  const locale = urlCodeToLocale[lang];
  const dictionary = await getDictionary(locale);

  return (
    <div className="space-y-6 p-6">
      <SimpleLocaleExample />
      <div className="space-y-2">
        <p>
          Current locale: {locale} (URL: /{lang})
        </p>
        <p>This text is server-side rendered: {dictionary.landing.welcome}</p>
        <CounterComponent dictionary={dictionary.counter} />
      </div>
    </div>
  );
};

export default Home;
