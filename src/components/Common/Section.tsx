import { ReactNode } from "react";
import tw, { styled } from "twin.macro";

export const SectionContainer = styled.section`
  ${tw`border-t-4 dark:border-t-gray-800`}

  page-break-inside: avoid;
`;

export const SectionHeader = styled.header`
  ${tw`py-4 print:py-2`}

  page-break-inside: avoid;
`;

export const SectionTitle = tw.h3`text-3xl print:(font-bold text-xl)`;

export const SectionContent = styled.div`
  @media print {
    section {
      page-break-inside: avoid;
    }
  }
`;

interface Props {
  title?: ReactNode;
  children: ReactNode;
}

export const Section = ({ title, children }: Props) => {
  return (
    <SectionContainer>
      {title && (
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
        </SectionHeader>
      )}
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};
