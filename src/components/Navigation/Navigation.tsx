import tw, { styled } from "twin.macro";
import { LanguageButtons } from "./components/LanguageButtons";
import { PrintButton } from "./components/PrintButton";
import { ThemeButtons } from "./components/ThemeButtons";

const Nav = styled.nav`
  ${tw`flex flex-col gap-2 print:hidden rounded-lg self-start`}
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
