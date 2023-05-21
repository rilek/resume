import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import pl from "./pl.json";
import en from "./en.json";
import { headers } from "next/headers";
import { headerName } from "@/utils/constants";

const initI18next = async () => {
  const instance = createInstance();

  await instance
    .use(initReactI18next)
    .init({
      resources: { pl, en },
      debug: false, //process.env.NODE_ENV === "development",
      lng: "en",
      defaultNS: "common",
      returnObjects: true,

      interpolation: { escapeValue: false },
    });

  return instance;
};

export const getConfig = async () => {
  const headersInstance = headers();
  const lng = headersInstance.get(headerName) || "en";

  return {
    lng,
  };
};

export async function getTranslation(
  ns?: keyof typeof pl,
  opts = {} as Record<string, unknown>
) {
  const i18n = await initI18next();
  const { lng } = await getConfig();

  return { ...i18n, t: i18n.getFixedT(lng, ns, opts?.keyPrefix as any) };
}
