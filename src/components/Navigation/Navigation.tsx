import tw, { styled } from "twin.macro";
import { LanguageButtons } from "./components/LanguageButtons/LanguageButtons";
import { PrintButton } from "./components/PrintButton";
import { ThemeButtons } from "./components/ThemeButtons/ThemeButtons";

const Nav = styled.nav`
  ${tw`flex flex-col gap-2 rounded-lg self-start sticky top-8 print:hidden`}
`;

export const Navigation = ({ className }: any) => {
  return (
    <Nav className={className}>
      <ThemeButtons />
      <LanguageButtons />
      <PrintButton />
    </Nav>
  );
};
