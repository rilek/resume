import { map } from "lodash";
import { FunctionComponent } from "react";
import { Box, Button } from "../../../components/Common/Common";
import tw from "twin.macro";

const getBorders = ({ length }: unknown[], i: number) => {
  if (length <= 1) return "";
  return i === 0
    ? tw`rounded-b-none`
    : i === length - 1
    ? tw`rounded-t-none`
    : tw`rounded-none`;
};

interface ButtonGroupProps<T extends unknown> {
  data: T[];
  renderer: FunctionComponent<T>;
}

export const ButtonGroup = <T extends unknown>({
  data,
  renderer,
}: ButtonGroupProps<T>) => {
  const Render = renderer || Button;
  return (
    <Box>
      {map(data, (props, i, arr) => (
        <Render {...props} key={i} css={getBorders(arr, i)} />
      ))}
    </Box>
  );
};
