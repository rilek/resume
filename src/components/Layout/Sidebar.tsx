import { ReactNode } from "react";
import { GridItem } from "./Grid";
import "twin.macro";
import tw, { styled } from "twin.macro";

export const Component = styled(GridItem)`
  ${tw`py-6 print:py-4`}

  ul {
    ${tw`flex flex-col gap-6 print:flex-row print:gap-x-2 print:justify-between`}
  }
  li {
    ${tw`print:flex-1 print:text-sm`}
  }
  h3 {
    ${tw`mb-1 font-medium`}
  }
  p, a {
    ${tw`text-sm`}
  }
  a {
    ${tw`flex gap-x-1 align-middle`}
  }
  svg {
    ${tw`text-gray-500 fill-current`}
  }
`;

interface Props {
  className?: string;
  children: ReactNode;
}

export const Sidebar = ({ className, children }: Props) => (
  <Component className={className}>{children}</Component>
);
