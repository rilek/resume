import tw, { styled } from "twin.macro";

export const Blend = styled.div`
  ${tw`bg-black`}
  transform-origin: right;
  position: fixed;
  transform: scaleX(0%);
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 999;
`;
