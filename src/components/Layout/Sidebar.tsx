import { ReactNode } from "react";
import { GridItem } from "./Grid";
import "twin.macro";
import tw, { styled } from "twin.macro";

export const Component = styled(GridItem)`
  ${tw`py-6 print:py-4`}

  ul {
    ${tw`grid grid-template-columns[repeat(auto-fill, minmax(150px, calc(25% - 1.5rem)))] gap-4 md:gap-6 lg:(flex flex-col) print:(flex flex-row gap-x-2 justify-between)`}
  }
  li {
    ${tw`print:(flex-1 text-sm)`}
  }
  h3 {
    ${tw`mb-1 font-medium`}
  }
  p,
  a {
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
