import { ReactNode } from "react";
import tw from "twin.macro";
import { GridItem } from "./Grid";

const Subtitle = tw.h2`text-xl text-gray-500 print:text-base`;

interface Props {
  className?: string;
  children: ReactNode;
}

export const PageSubtitle = ({ className, children }: Props) => (
  <GridItem className={className}  top>
    <Subtitle>{children}</Subtitle>
  </GridItem>
);
