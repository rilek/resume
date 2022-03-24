import tw, { styled } from "twin.macro";

export const Grid = styled.div`
  ${tw`grid`}
`;

type GridItemProps = {
  top?: boolean;
};

export const GridItem = styled.div<GridItemProps>`
  ${({ top }) => top && tw`lg:py-4 print:py-4 self-end`}
`;
