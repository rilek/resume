import { useContext } from "react";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react";
import { useBlendContext } from "../utils/blend";
import tw, { styled } from "twin.macro";
import { forwardRef } from "react";

export const Blend = styled.div`
  ${tw`bg-gray-900`}
  transform-origin: right;
  position: fixed;
  transform: scaleX(0%);
  height: 100vw;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 10;
`;
