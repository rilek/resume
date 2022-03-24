import { ReactNode } from "react";
import tw, { styled } from "twin.macro";
import { GridItem } from "./Grid";

const Header = tw.header``;
const Title = styled.h1`
  ${tw`text-2xl lg:text-4xl font-black print:text-3xl`}
`;

interface Props {
  className?: string;
  children: ReactNode;
}

export const PageTitle = ({ className, children }: Props) => (
  <GridItem className={className} top>
    <Header>
      <Title>{children}</Title>
    </Header>
  </GridItem>
);
