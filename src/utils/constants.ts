export const fallbackLng = "en";
export const languages = ["en", "pl"] as const;
export type Language = (typeof languages)[number];
