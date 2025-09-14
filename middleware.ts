import { NextRequest } from "next/server";

import { localizationMiddleware } from "@/features/internationalization/localization-middleware";

export const config = { matcher: ["/((?!api|_next|.*.svg$).*)"] };

export const middleware = (request: NextRequest) => {
  return localizationMiddleware(request);
};
