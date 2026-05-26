import en from "./en.json";
import pl from "./pl.json";
import type { Language } from "@/utils/constants";

const resources = { en, pl };

export function getTranslation(lng: Language, ns: keyof typeof pl = "common") {
  return {
    t: <Key extends keyof (typeof pl)[typeof ns]>(key: Key) => resources[lng][ns][key],
  };
}
