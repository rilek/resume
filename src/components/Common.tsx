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
  ${tw`opacity-50`}
  ::before {
    content: "|";
  }
`;

export const Section = styled.section`
  ${tw`border-t-4 dark:border-t-gray-800`}

  page-break-inside: avoid;
`;

export const SectionHeader = styled.header`
  ${tw`py-4 print:py-2`}

  page-break-inside: avoid;
`;

export const SectionTitle = tw.h3`print:font-bold text-3xl print:text-xl`;

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

export const SubsectionTitle = styled.h3`
  ${tw`screen:text-lg print:text-base font-medium`}
`;

export const SubsectionDate = styled.h4`
  ${tw`opacity-50 print:text-sm`}
`;

export const SubsectionContent = tw.div`pb-4 print:text-sm`;

export const Button = styled.button<{ active?: boolean }>`
  ${tw`text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded text-sm p-2.5`}
  ${({ active }) => (active ? tw`bg-gray-200 dark:bg-gray-700` : undefined)}
`;