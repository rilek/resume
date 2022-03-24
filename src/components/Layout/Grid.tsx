import tw, { styled } from "twin.macro";

export const Grid = styled.div`
  ${tw`grid grid-cols-2 grid-rows-2 gap-x-12 print:gap-x-0`}
  grid-template-columns: 250px auto 40px;
  grid-template-rows: auto;

  @media print {
    grid-template-columns: 200px auto;
  }
`;

type GridItemProps = {
  top?: boolean;
};

export const GridItem = styled.div<GridItemProps>`
  ${({ top }) => top && tw`py-4 self-end`}
`;
