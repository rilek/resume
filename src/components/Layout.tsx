import { ReactNode } from "react";
import tw, { styled } from "twin.macro";
import { Grid } from "./Grid";
import { PageSubtitle as _PageSubtitle } from "./PageSubtitle";
import { PageTitle as _PageTitle } from "./PageTitle";
import { Sidebar as _Sidebar } from "./Sidebar";
import { Content as _Content } from "./Content";
import { Section, SectionContent } from "./Common";

const Wrapper = styled.main`
  ${tw`max-w-6xl mx-24 py-12 print:mx-0 print:py-0`}

  a {
    ${tw`text-blue-700 print:text-black`}
    transition: color 0.15s;
    &:hover {
      ${tw`text-blue-500`}
    }
  }

  [data-short-url] {
    &::after {
      ${tw`hidden print:text-black print:inline print:content[attr(data-short-url)] print:ml-2`}
    }
  }
`;

const PageTitle = tw(_PageTitle)`grid-column[1/2] grid-row[1]`;
const PageSubtitle = tw(_PageSubtitle)`grid-row[1] grid-column[2]`;
const Sidebar = styled(_Sidebar)`
  ${tw`grid-row[2] grid-column[1] print:grid-column[span 2] print:border-b-4`}
`;
const Content = styled(_Content)`
  ${tw`grid-row[2] grid-column[2] print:grid-row[3] print:grid-column[span 2]`}

  ${SectionContent} {
    ${tw`print:columns[2] print:gap-x-10`}
  }
`;

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

export const Layout = ({ title, subtitle, sidebar, children }: Props) => (
  <Wrapper>
    <Grid>
      <PageTitle>{title}</PageTitle>
      <PageSubtitle>{subtitle}</PageSubtitle>
      <Sidebar>{sidebar}</Sidebar>
      <Content>{children}</Content>
    </Grid>
  </Wrapper>
);
