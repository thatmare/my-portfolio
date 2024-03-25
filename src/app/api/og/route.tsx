import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const fontSpline = await fetch(
    new URL("../../../../assets/fonts/SplineSansMono-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontDmSans = await fetch(
    new URL("../../../../assets/fonts/DMSans-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-slate-900">
        <h1 style={{ fontFamily: "Spline" }} tw="text-indigo-400/80 text-8xl tracking-wider">
          Marissa Vargas
        </h1>
        <h2 style={{ fontFamily: "DmSans" }} tw="text-indigo-400/80 text-6xl bg-indigo-900 py-2 px-10 rounded-full">Frontend Developer</h2>
      </div>
    ),
    {
      fonts: [
        {
          name: "Spline",
          data: fontSpline,
          style: "normal",
        },
        {
            name: "DmSans",
            data: fontDmSans,
            style: "normal",
        }
      ],
    }
  );
}
