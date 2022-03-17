import { ReactNode } from "react";
import tw, { styled } from "twin.macro";
import { GridItem } from "./Grid";

const Subtitle = styled.h2`
  ${tw`text-xl text-gray-500 dark:text-gray-400 print:text-base`}
`;

interface Props {
  className?: string;
  children: ReactNode;
}

export const PageSubtitle = ({ className, children }: Props) => (
  <GridItem className={className}  top>
    <Subtitle>{children}</Subtitle>
  </GridItem>
);
