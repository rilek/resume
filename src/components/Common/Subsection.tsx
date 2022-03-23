import { ReactNode } from "react";
import tw, { styled } from "twin.macro";

export const SubsectionContainer = styled.section`
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

interface Props {
  title?: ReactNode;
  date?: ReactNode;
  children?: ReactNode;
}

export const Subsection = ({ title, date, children }: Props) => {
  return (
    <SubsectionContainer>
      {(title || date) && (
        <SubsectionHeader>
          {title && <SubsectionTitle>{title}</SubsectionTitle>}
          {date && <SubsectionDate>{date}</SubsectionDate>}
        </SubsectionHeader>
      )}
      {children && <SubsectionContent>{children}</SubsectionContent>}
    </SubsectionContainer>
  );
};
