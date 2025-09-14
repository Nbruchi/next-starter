"use client";

import Link from "next/link";

import { useSwitchLocaleHref } from "@/features/internationalization/use-switch-locale-href";

const SimpleLocaleExample = () => {
  const getSwitchLocaleHref = useSwitchLocaleHref();

  return (
    <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
      <h3 className="mb-2 text-lg font-semibold text-yellow-800">
        How to use the useSwitchLocaleHref hook:
      </h3>
      <div className="mt-4 flex gap-2">
        <Link
          href={getSwitchLocaleHref("en-US")}
          className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
          Switch to English
        </Link>
        <Link
          href={getSwitchLocaleHref("rw-RW")}
          className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600">
          Switch to Kinyarwanda
        </Link>
      </div>
    </div>
  );
};

export default SimpleLocaleExample;
