import { map } from "lodash";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import tw, { styled } from "twin.macro";

export const Separator = styled.span`
  ${tw`opacity-50`}
  ::before {
    content: "|";
  }
`;

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = styled.button<{ active?: boolean }>`
  ${tw`text-gray-500  rounded text-sm font-bold p-2.5 hover:bg-gray-100 dark:(text-gray-400 hover:bg-gray-700) focus:(outline-none ring-4 ring-gray-200 dark:ring-gray-700)`}
  ${({ active }) => (active ? tw`bg-gray-200 dark:bg-gray-700` : undefined)}
`;

export const ContentList = ({ list }: { list: string[] }) => (
  <ul>
    {map(list, (s, i) => (
      <li key={i}>{s}</li>
    ))}
  </ul>
);

export const Box = styled.div`
  ${tw`rounded bg-gray-100 dark:bg-gray-800`}

  ${Button} {
    width: 100%;
  }
`;
