import { fallbackLng } from "./constants";

export const getLanguage = (path: string) => {
  const regex = new RegExp("^/?([a-zA-Z]{2})/?");
  const matches = path.match(regex);

  return matches?.[1] || fallbackLng;
};
