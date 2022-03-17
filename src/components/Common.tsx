import tw, { styled } from "twin.macro";

export const List = styled.div`
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
  span {
    ${tw`text-sm`}
  }
  br {
    ${tw`print:content[" "]`}
    &:after {
      ${tw`print:inline print:content[" • "]`}
    }
  }
`;
export const ListItem = tw.li``;
export const ListItemTitle = tw.h3``;
export const ListItemContent = tw.span`text-sm`;

export const BulletList = styled.ul`
  ${tw`list-disc`}

  @media print {
    column-width: auto auto;
    column-gap: 3em;
    ${tw`text-sm`}
  }
`;
export const BulletListItem = tw.li`ml-6`;

export const Separator = styled.span`
  ${tw`text-gray-300 dark:text-gray-700`}
  ::before {
    content: "|";
  }
`;

export const Section = styled.section`
  :not(:first-of-type) {
    ${tw`border-t-4 dark:border-t-gray-800`}
  }

  page-break-inside: avoid;
`;

export const SectionHeader = styled.header`
  ${tw`py-4 print:py-2`}

  page-break-inside: avoid;
`;

export const SectionTitle = tw.h3`font-light text-3xl print:text-xl print:font-bold`;

export const SectionContent = styled.div`
  @media print {
    section {
      page-break-inside: avoid;
    }
  }
`;

export const Subsection = styled.section`
  ${tw`border-t-2 dark:border-t-gray-800`}

  page-break-inside: avoid;
`;

export const SubsectionHeader = tw.header`py-2`;

export const SubsectionTitle = tw.h3`screen:text-lg print:text-base font-medium`;

export const SubsectionDate = tw.h4`text-gray-800 print:text-sm dark:text-gray-400`;

export const SubsectionContent = tw.div`pb-4 print:text-sm`;
