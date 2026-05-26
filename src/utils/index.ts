import { languages, type Language } from "./constants";

export const getLanguage = (path: string) => {
  const regex = new RegExp(`^/?(${languages.join("|")})/?`);
  const matches = path.match(regex);

  return matches?.[1] as Language | undefined;
};
