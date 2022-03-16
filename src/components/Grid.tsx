import tw, { styled } from "twin.macro";

export const Grid = styled.div`
  ${tw`grid grid-cols-2 grid-rows-2 gap-x-12 print:gap-x-0`}
  grid-template-columns: 250px auto;
  grid-template-rows: auto;

  @media print {
    grid-template-columns: 200px auto;
  }
`;

export const GridItem = styled.div<{ top?: boolean }>`
  ${({ top }) => top && tw`border-b-8 py-4 align-self[flex-end]`}
`;
