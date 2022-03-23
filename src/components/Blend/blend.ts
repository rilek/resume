import { createContext, useContext, useRef } from "react";

interface TriggerProps {
  onStart?: any;
  onMiddle?: any;
  onFinish?: any;
  duration?: number;
}

interface ContextProps {
  trigger: (props: TriggerProps) => void;
}

export const BlendContext = createContext<ContextProps>({} as any);

export const useBlend = ({ ref }: any): ContextProps => {
  const runningRef = useRef(false);

  const trigger = ({
    onStart,
    onFinish,
    onMiddle,
    duration = 300,
  }: TriggerProps) => {
    if (!runningRef.current && ref.current) {
      const slidingAnimationStart = new Animation(
        new KeyframeEffect(
          ref.current,
          [
            { transform: "scaleX(0%)", transformOrigin: "right" },
            { transform: "scaleX(100%)", transformOrigin: "right" },
          ],
          {
            duration,
            iterations: 1,
            fill: "backwards",
            easing: "ease",
          }
        ),
        document.timeline
      );

      const slidingAnimationEnd = new Animation(
        new KeyframeEffect(
          ref.current,
          [
            { transform: "scaleX(100%)", transformOrigin: "left" },
            { transform: "scaleX(0%)", transformOrigin: "left" },
          ],
          {
            duration,
            fill: "backwards",
            iterations: 1,
            easing: "ease",
          }
        ),
        document.timeline
      );

      slidingAnimationStart.onfinish = () => {
        if (onMiddle) onMiddle();
        slidingAnimationEnd.play();
      };

      slidingAnimationEnd.onfinish = () => {
        if (onFinish) onFinish();
        runningRef.current = false;
      };

      slidingAnimationStart.ready.then((e) => {
        runningRef.current = true;
        if (onStart) onStart();
        slidingAnimationStart.play();
      });
    }
  };

  return { trigger };
};

export const useBlendContext = () => useContext(BlendContext);
