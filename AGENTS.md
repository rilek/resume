# Codex Guide: Job-Specific Resume Variants

This repo is a TanStack Start resume site. Resume and cover-letter bodies are stored as markdown and rendered through `src/locales/content.ts`.

When the user provides a job description and asks to tailor the resume, create a new resume variant instead of overwriting the canonical resume. At any cost do not make up any information not available already in existing resumes. Raise any missing skills if needed.

## Current Content Structure

- English resume: `src/locales/content/en/resume.md`
- Polish resume: `src/locales/content/pl/resume.md`
- English cover letter: `src/locales/content/en/cover_letter.md`
- Polish cover letter: `src/locales/content/pl/cover_letter.md`
- Markdown registry: `src/locales/content.ts`
- Default resume route: `src/routes/{-$lng}.index.tsx`
- Dynamic resume variant route: `src/routes/resume.$company.tsx`
- Cover-letter route: `src/routes/{-$lng}.cover-letter.tsx`

## Resume Document Metadata

Every resume markdown file begins with YAML frontmatter. The renderer strips this metadata before producing HTML, so it is not visible on the resume page.

Canonical master resumes use:

```yaml
---
document: resume
variant: master
language: en
description: Canonical source resume used to generate tailored variants. Every claim in a variant must be grounded in this document.
---
```

Tailored resumes use:

```yaml
---
document: resume
variant: tailored
language: en
description: Tailored resume generated from the canonical English master resume.
source: resume.md
company: Acme
job-link: ""
---
```

- `variant` is either `master` or `tailored`.
- `source` is the master resume filename used to create the variant.
- `company` is the target company, or a concise target label when no company is known.
- `job-link` is the original job-posting URL. Leave it empty only when no URL is available.
- Preserve and update the frontmatter when editing or generating resume variants.

## Markdown Rendering Structure

Resume and cover-letter markdown headings carry layout meaning:

- `##` is a top-level section title.
- `###` is a subsection title.
- Metadata lines immediately after `###` can define right-side supplementary information:
  - `company:` or `institution:` for organization names.
  - `period:` for dates.
- `tags:` is a comma-separated list rendered as horizontal tags.
- Metadata labels are always lowercase and English, even in localized markdown files.
- If the content after a heading is a paragraph instead of a list, it is rendered as normal paragraph text.
- Everything after that is rendered as normal content until the next heading.

When editing or creating variants, preserve this structure unless the layout intentionally needs to change.

Example:

```md
### Senior Fullstack Engineer

company: [Kleene](https://kleene.ai/)
period: August 2022 - Present
tags: Frontend Architecture, TypeScript, React, PostgreSQL

- Built a user-configurable BI-style analytics feature backed by warehouse data.
```

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
   - Resume variants named `resume-<slug>.md` are loaded dynamically by `getResumeVariantHtml`.
   - Do not add one-off imports or `ContentPage` entries for English job-specific resume variants.

6. Add a route for the variant:
   - Use the existing dynamic route at `src/routes/resume.$company.tsx`.
   - The URL for `src/locales/content/en/resume-acme.md` is `/resume/acme`.
   - Do not create one-off route files unless the user explicitly asks for a custom route.

7. Optionally add a navigation link only if the user wants the variant visible in the menu. Job-specific variants are often better left accessible by direct URL only.

8. Run verification:
   - `pnpm exec tsc --noEmit`
   - `pnpm exec oxlint src vite.config.ts`
   - If routes were added, run or rely on the TanStack router plugin to regenerate `src/routeTree.gen.ts`; do not manually edit that generated file.

## Naming Example

For a job at Acme:

- Markdown file: `src/locales/content/en/resume-acme.md`
- URL: `/resume/acme`

## Recommended Response To The User

After creating a variant, tell the user:

- the new URL path,
- the markdown file that was created,
- which checks passed,
- any assumptions made from the job description.

Keep the explanation short. The user mainly wants a ready-to-open tailored resume.
