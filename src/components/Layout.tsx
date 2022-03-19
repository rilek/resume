import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";
import tw, { styled, GlobalStyles } from "twin.macro";
import { Grid } from "./Grid";
import { PageSubtitle as _PageSubtitle } from "./PageSubtitle";
import { PageTitle as _PageTitle } from "./PageTitle";
import { Sidebar as _Sidebar } from "./Sidebar";
import { Content as _Content } from "./Content";
import { SectionContent } from "./Common";
import { Navigation as _Navigation } from "./Navigation";
import { ThemeContext, useTheme } from "../utils/theme";
import { Blend } from "./SlidingBlend";
import { BlendContext, useBlend } from "../utils/blend";
import { graphql } from "gatsby";
import '../data/i18n';

const Bg = styled.div`
  ${tw`dark:bg-gray-900 bg-white dark:text-gray-200`}
  isolation: isolate;

  &.invert {
    mix-blend-mode: difference;
  }
`;

const Wrapper = styled.main`
  ${tw`max-w-6xl mx-24 py-12 print:mx-0 print:py-0`}

  a {
    ${tw`text-blue-700 print:text-black dark:text-blue-400 hover:text-blue-500`}
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
  ${tw`grid-row[2] grid-column[1] print:grid-column[span 2] print:border-b-4 print:dark:border-b-gray-800`}
`;
const Content = styled(_Content)`
  ${tw`grid-row[2] grid-column[2] print:grid-row[3] print:grid-column[span 2]`}

  ${SectionContent} {
    ${tw`print:columns[2] print:gap-x-10`}
  }
`;
const Navigation = styled(_Navigation)`
  ${tw`grid-row[2] grid-column[3]`}
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const preferredTheme = window.localStorage.getItem("theme");
            if(preferredTheme) document.body.className = preferredTheme;
          `,
          }}
        />
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

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
