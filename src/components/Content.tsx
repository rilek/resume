import { GridItem } from "./Grid";
import "twin.macro";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Content = ({ className, children }: Props) => (
  <GridItem className={className} >{children}</GridItem>
);
