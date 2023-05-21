import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const fontBlack = fetch(
  new URL("../../assets/SourceSerifPro-Black.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const fontSemibold = fetch(
  new URL("../../assets/SourceSerifPro-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const fontRegular = fetch(
  new URL("../../assets/SourceSerifPro-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler() {
  const fontRegularData = await fontRegular;
  const fontSemiboldData = await fontSemibold;
  const fontBlackData = await fontBlack;

  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col justify-between bg-white p-20"
        style={{
          fontFamily: "Source Serif Pro",
        }}
      >
        <div tw="flex flex-col">
          <div tw="font-black text-9xl">Rafał Ileczko</div>
          <div tw="text-6xl">Senior Software Developer</div>
        </div>
        <div tw="flex">
          <ul tw="flex flex-col gap-4 text-5xl">
            <li tw="mt-2">
              Email: <strong tw="ml-4">rileczko@gmail.com</strong>
            </li>
            <li tw="mt-2">
              Website: <strong tw="ml-4">rileczko.com</strong>
            </li>
          </ul>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Source Serif Pro",
          data: fontBlackData,
          style: "normal",
          weight: 900,
        },
        {
          name: "Source Serif Pro",
          data: fontSemiboldData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Source Serif Pro",
          data: fontRegularData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
