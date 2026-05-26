# Codex Guide: Job-Specific Resume Variants

This repo is a TanStack Start resume site. Resume and cover-letter bodies are stored as markdown and rendered through `src/locales/content.ts`.

When the user provides a job description and asks to tailor the resume, create a new resume variant instead of overwriting the canonical resume.

## Current Content Structure

- English resume: `src/locales/content/en/resume.md`
- Polish resume: `src/locales/content/pl/resume.md`
- English cover letter: `src/locales/content/en/cover_letter.md`
- Polish cover letter: `src/locales/content/pl/cover_letter.md`
- Markdown registry: `src/locales/content.ts`
- Default resume route: `src/routes/{-$lng}.index.tsx`
- Cover-letter route: `src/routes/{-$lng}.cover-letter.tsx`

## Tailoring Workflow

1. Read the job description and identify:
   - target role and seniority,
   - required technologies,
   - domain signals,
   - leadership expectations,
   - product/business expectations,
   - keywords likely relevant to ATS scanning.

2. Read the canonical resume for the requested language, usually `src/locales/content/en/resume.md`.

3. Create a variant markdown file:
   - Use a short slug based on the company or role.
   - Example: `src/locales/content/en/resume-acme.md`
   - If no company name is available, use the role: `resume-senior-fullstack.md`

4. Tailor the resume conservatively:
   - Do not invent experience, employers, dates, degrees, metrics, tools, or responsibilities.
   - Reorder and rephrase existing experience to match the job description.
   - Prefer concrete achievements and matching keywords from the job description.
   - Keep the same general markdown structure unless there is a clear reason to change it.
   - Keep the resume concise and scannable.
   - Preserve markdown link style and section heading conventions.

5. Register the new markdown in `src/locales/content.ts`:
   - Import the new file with `?raw`.
   - Add a new `ContentPage` entry.
   - Add the imported markdown under the matching language.

6. Add a route for the variant:
   - Create `src/routes/{-$lng}.resume-<slug>.tsx`.
   - Copy the pattern from `src/routes/{-$lng}.index.tsx`.
   - Change the loader page from `"resume"` to the new `ContentPage` key.

7. Optionally add a navigation link only if the user wants the variant visible in the menu. Job-specific variants are often better left accessible by direct URL only.

8. Run verification:
   - `pnpm exec tsc --noEmit`
   - `pnpm exec oxlint src vite.config.ts`
   - If routes were added, run or rely on the TanStack router plugin to regenerate `src/routeTree.gen.ts`; do not manually edit that generated file.

## Naming Example

For a job at Acme:

- Markdown file: `src/locales/content/en/resume-acme.md`
- Content key: `resumeAcme`
- Route file: `src/routes/{-$lng}.resume-acme.tsx`
- URL: `/en/resume-acme`

## Recommended Response To The User

After creating a variant, tell the user:

- the new URL path,
- the markdown file that was created,
- which checks passed,
- any assumptions made from the job description.

Keep the explanation short. The user mainly wants a ready-to-open tailored resume.
