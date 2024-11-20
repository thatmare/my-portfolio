import { spline } from "@/assets/fonts/spline";

export function StickyTitle({ title }: { title: string }) {
  return (
    <div className="sticky top-0 w-full backdrop-blur-sm px-8 py-4 lg:hidden">
      <h3
        className={`${spline.className} font-semibold tracking-widest text-moody-blue-400`}
      >
        {title}
      </h3>
    </div>
  );
}
