import { Spline_Sans_Mono } from "next/font/google";
import GithubSvg from "./svg/Github";
import LinkedinSvg from "./svg/Linkedin";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

export default function Intro() {
  return (
    <section className="px-8 mb-20">
      <div className="mb-20">
        <h1
          className={`${spline.className} text-3xl font-medium pt-20 text-moody-blue-400/80 tracking-widest`}
        >
          Marissa Vargas Sánchez
        </h1>
        <h2 className="text-xl font-medium py-6 text-moody-blue-200/90">
          Frontend Developer
        </h2>
        <p className="font-light">
          I find creativity in building digital products.
        </p>
        <div className="flex flex-row my-4">
          <a href="https://github.com/thatmare">
            <GithubSvg className="mr-2" />
          </a>
          <a href="https://www.linkedin.com/in/thatmare/">
            <LinkedinSvg className="mx-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
