import { ReactNode } from "react";
import { GridItem } from "./Grid";
import "twin.macro";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Sidebar = ({ className, children }: Props) => (
  <GridItem className={className} >{children}</GridItem>
);
