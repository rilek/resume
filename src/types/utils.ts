import type { DetailedHTMLProps, HTMLAttributes } from "react";

import type locales from "../locales/en.json";

export type DetailedProps<T = HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

export type Locales = typeof locales;
export type SidebarData = Locales["common"]["sidebar"];
