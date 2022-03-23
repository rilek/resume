import tw, { styled } from "twin.macro";

export const Separator = styled.span`
  ${tw`opacity-50`}
  ::before {
    content: "|";
  }
`;

export const Button = styled.button<{ active?: boolean }>`
  ${tw`text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded text-sm p-2.5`}
  ${({ active }) => (active ? tw`bg-gray-200 dark:bg-gray-700` : undefined)}
`;