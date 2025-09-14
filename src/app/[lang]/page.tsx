import SimpleLocaleExample from "@/components/simple-locale-example";
import CounterComponent from "@/features/counter/counter-component";
import { getDictionary } from "@/features/internationalization/get-dictionaries";
import { Locale } from "@/features/internationalization/i18n-config";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <div className="space-y-6 p-6">
      <SimpleLocaleExample />
      <div className="space-y-2">
        <p>Current locale: {lang}</p>
        <p>This text is server-side rendered: {dictionary.landing.welcome}</p>
        <CounterComponent dictionary={dictionary.counter} />
      </div>
    </div>
  );
};

export default Home;
