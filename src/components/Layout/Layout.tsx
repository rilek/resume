import { ReactNode, useRef } from "react";
import tw, { styled, GlobalStyles } from "twin.macro";
import { Grid } from "./Grid";
import { PageSubtitle as _PageSubtitle } from "./PageSubtitle";
import { PageTitle as _PageTitle } from "./PageTitle";
import { Sidebar as _Sidebar } from "./Sidebar";
import { Content as _Content } from "./Content";
import { Navigation as _Navigation } from "../Navigation/Navigation";
import { ThemeContext, useTheme } from "../../utils/theme";
import { Blend } from "../Blend/SlidingBlend";
import { BlendContext, useBlend } from "../Blend/blend";
import "../../locales/i18n";
import { SectionContent } from "../Common/Section";
import { SEO } from "../SEO";
import { Box } from "../Common/Common";

const DefaultThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
  const preferredTheme = window.localStorage.getItem("theme");
  if(preferredTheme) document.body.className = preferredTheme;
`,
    }}
  />
);

const Bg = styled.div`
  ${tw`bg-white text-gray-800 min-h-screen dark:(bg-gray-900 text-gray-200)`}
  min-height: 100vh;
`;

const Wrapper = styled.main`
  ${tw`max-w-6xl mx-4 py-6 md:(mx-12 py-8) xl:(mx-24 py-12) print:(mx-0 py-0)`}

  ${Grid} {
    ${tw`gap-x-4 lg:(gap-x-12 grid-template-columns[250px auto 40px]) print:(gap-x-0 grid-template-columns[200px auto])`}
  }

  a {
    ${tw`text-blue-700 print:color[inherit] dark:text-blue-400 hover:text-blue-500`}
  }

  [data-short-url] {
    &::after {
      ${tw`hidden print:(color[inherit] inline content[attr(data-short-url)] ml-2)`}
    }
  }
`;

const PageTitle = tw(_PageTitle)`grid-column[1] grid-row[1]`;
const PageSubtitle = tw(
  _PageSubtitle
)`grid-row[2] grid-column[1] lg:(grid-row[1] grid-column[2]) print:(grid-row[1] grid-column[2])`;
const Sidebar = styled(_Sidebar)`
  ${tw`grid-row[3] grid-column[1] lg:(grid-row[2]) print:(grid-column[span 2] grid-row[2] border-b-4 dark:border-b-gray-800)`}
`;
const Content = styled(_Content)`
  ${tw`grid-row[4] grid-column[1] lg:(grid-row[2] grid-column[2]) print:(grid-row[3] grid-column[span 2])`}

  ${SectionContent} {
    ${tw`print:(columns[2] gap-x-10)`}
  }
`;
const Navigation = styled(_Navigation)`
  ${tw`grid-column[1] sticky bottom-0 z-10 mx--4 justify-center px-4 py-2 bg-gradient-to-b from-transparent to-white dark:(to-gray-900) lg:(block grid-row[2] grid-column[3]) print:(hidden)`}
  ${Box} {
    ${tw`flex flex-row lg:flex-col`}
  }
`;
interface Props {
  title: ReactNode;
  subtitle: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

export const Layout = ({ title, subtitle, sidebar, children }: Props) => {
  const nodeRef = useRef(null);
  const themeContext = useTheme();
  const blendContext = useBlend({ ref: nodeRef });

  return (
    <ThemeContext.Provider value={themeContext}>
      <BlendContext.Provider value={blendContext}>
        <DefaultThemeScript />
        <SEO />
        <Bg>
          <GlobalStyles />
          <Wrapper>
            <Grid>
              <Navigation />
              <PageTitle>{title}</PageTitle>
              <PageSubtitle>{subtitle}</PageSubtitle>
              <Sidebar>{sidebar}</Sidebar>
              <Content>{children}</Content>
            </Grid>
          </Wrapper>
          <Blend ref={nodeRef} />
        </Bg>
      </BlendContext.Provider>
    </ThemeContext.Provider>
  );
};
