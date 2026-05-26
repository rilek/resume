import coverLetterEn from "@/locales/content/en/cover_letter.md?raw";
import resumeEn from "@/locales/content/en/resume.md?raw";
import coverLetterPl from "@/locales/content/pl/cover_letter.md?raw";
import resumePl from "@/locales/content/pl/resume.md?raw";
import type { Language } from "@/utils/constants";

export const content = {
  en: {
    coverLetter: coverLetterEn,
    resume: resumeEn,
  },
  pl: {
    coverLetter: coverLetterPl,
    resume: resumePl,
  },
} satisfies Record<Language, Record<"coverLetter" | "resume", string>>;
