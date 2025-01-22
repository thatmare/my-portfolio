import { spline } from "@/assets/fonts/spline";
import { StickyBarProps } from "@/types/layouts/sticky-bar";

export default function StickyBar({
  children,
  title,
  subtitle,
  paragraph,
}: StickyBarProps) {
  return (
    <header className="px-8 mb-20 lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:pl-20 lg:mb-0">
      <h1
        className={`${spline.className} text-moody-blue-400/80 tracking-widest text-3xl font-bold pt-20 lg:text-5xl`}
      >
        {title}
      </h1>
      <h2 className="text-moody-blue-200/90 font-medium text-xl py-2 lg:text-2xl">
        {subtitle}
      </h2>
      <p className="font-light lg:text-lg">{paragraph}</p>
      {children}
    </header>
  );
}
