import { useTranslation } from "react-i18next";
import tw, { styled } from "twin.macro";
import { useBlendContext } from "../Blend/blend";
import { useThemeContext } from "../../utils/theme";
import { Button } from "../Common/Common";

const Nav = styled.nav`
  ${tw`flex flex-col gap-2 print:hidden rounded-lg self-start`}
`;

const Box = styled.div`
  ${tw`rounded bg-gray-100 dark:bg-gray-800`}
`;

const SystemThemeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" tw="w-5 h-5">
    <path
      d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
      strokeWidth="2"
      strokeLinejoin="round"
      tw="stroke-current"
    ></path>
    <path
      d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      tw="stroke-current"
    ></path>
  </svg>
);

const DarkThemeIcon = () => (
  <svg
    tw="w-5 h-5"
    id="theme-toggle-dark-icon"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
  </svg>
);

const LightThemeIcon = () => (
  <svg
    id="theme-toggle-light-icon"
    tw="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const ThemeButton = ({ children, theme: targetTheme, ...rest }: any) => {
  const {
    theme: contextTheme,
    osTheme,
    localTheme,
    pickTheme,
  } = useThemeContext();
  const { trigger } = useBlendContext();

  const onPickTheme = (
    targetTheme ? contextTheme === targetTheme : osTheme === contextTheme
  )
    ? () => pickTheme(targetTheme)
    : () => trigger({ onMiddle: () => pickTheme(targetTheme) });
  const onClick = localTheme !== targetTheme ? () => onPickTheme() : undefined;

  return (
    <Button
      onClick={onClick}
      active={targetTheme ? targetTheme === localTheme : !localTheme}
      {...rest}
    >
      {children}
    </Button>
  );
};

const LanguageButton = ({ children, targetLanguage, ...rest }: any) => {
  const { trigger } = useBlendContext();
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const onPickLanguage = () =>
    trigger({ onMiddle: () => changeLanguage(targetLanguage) });
  const onClick =
    language !== targetLanguage ? () => onPickLanguage() : undefined;

  return (
    <Button onClick={onClick} active={language === targetLanguage} {...rest}>
      {children}
    </Button>
  );
};

export const Navigation = ({ className }: any) => {
  return (
    <Nav className={className}>
      <Box>
        <ThemeButton theme={undefined} tw={"rounded-b-none"}>
          <SystemThemeIcon />
        </ThemeButton>
        <ThemeButton theme={"light"} tw={"rounded-none"}>
          <LightThemeIcon />
        </ThemeButton>
        <ThemeButton theme={"dark"} tw={"rounded-t-none"}>
          <DarkThemeIcon />
        </ThemeButton>
      </Box>
      <Box>
        <LanguageButton targetLanguage="pl">PL</LanguageButton>
        <LanguageButton targetLanguage="en">EN</LanguageButton>
      </Box>
    </Nav>
  );
};
