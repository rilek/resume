import { GridItem } from "./Grid";
import "twin.macro";
import { ReactNode } from "react";
import tw, { styled } from "twin.macro";

const Component = styled(GridItem)`
  ul {
    ${tw`list-disc`}

    @media print {
      column-width: auto auto;
      column-gap: 3em;tw
      ${tw`text-sm`}
    }
  }

  li {
    ${tw`ml-6`}
  }`;

interface Props {
  className?: string;
  children: ReactNode;
}

export const Content = ({ className, children }: Props) => (
  <Component className={className}>{children}</Component>
);
