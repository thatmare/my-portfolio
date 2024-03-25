import { Spline_Sans_Mono } from "next/font/google";
import GithubSvg from "./svg/Github";
import LinkedinSvg from "./svg/Linkedin";
import EmailSvg from "./svg/Email";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

export default function Intro() {
  return (
    <header className="px-8 mb-20 lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:pl-20 lg:mb-0">
      <h1
        className={`${spline.className} text-moody-blue-400/80 tracking-widest text-3xl font-bold pt-20 lg:text-5xl`}
      >
        Marissa Vargas Sánchez
      </h1>
      <h2 className="text-moody-blue-200/90 font-medium text-xl py-2 lg:text-2xl">
        Frontend Developer
      </h2>
      <p className="font-light lg:text-lg">
        I find creativity in building digital products.
      </p>
      <nav>
        <ul
          className={`${spline.className} text-moody-blue-400 font-semibold hidden h-40 lg:block`}
        >
          <li className="h-10">
            <a href="#about" className="group flex items-center py-2">
              <span className="block w-10 h-px bg-moody-blue-400 mr-2 group-hover:bg-moody-blue-200 group-hover:w-14 transition-all"></span>
              <span className="group-hover:text-moody-blue-200 group-hover:text-lg group-hover:tracking-widest group-focus-visible:text-moody-blue-200 group-focus-visible:text-lg transition-all">
                about
              </span>
            </a>
          </li>
          <li className="h-10">
            <a href="#experience" className="group flex items-center py-2">
              <span className="block w-10 h-px bg-moody-blue-400 mr-2 group-hover:bg-moody-blue-200 group-hover:w-14 transition-all"></span>
              <span className="group-hover:text-moody-blue-200 group-hover:text-lg group-hover:tracking-widest group-focus-visible:text-moody-blue-200 group-focus-visible:text-lg transition-all">
                relevant experience
              </span>
            </a>
          </li>
          <li className="h-10">
            <a href="#projects" className="group flex items-center py-2">
              <span className="block w-10 h-px bg-moody-blue-400 mr-2 group-hover:bg-moody-blue-200 group-hover:w-14 transition-all"></span>
              <span className="group-hover:text-moody-blue-200 group-hover:text-lg group-hover:tracking-widest group-focus-visible:text-moody-blue-200 group-focus-visible:text-lg transition-all">
                projects
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row my-4">
        <a
          href="https://www.linkedin.com/in/thatmare/"
          className="flex items-center justify-center w-14 h-14"
        >
          <LinkedinSvg className="hover:fill-moody-blue-400 hover:w-10 hover:h-10 transition-all" />
        </a>
        <a
          href="https://github.com/thatmare"
          className="flex items-center justify-center w-14 h-14"
        >
          <GithubSvg className="hover:fill-moody-blue-400 hover:w-10 hover:h-10 transition-all" />
        </a>
        <a
          href="mailto:marissa.lorena@hotmail.com"
          className="flex items-center justify-center w-14 h-14"
        >
          <EmailSvg className="hover:fill-moody-blue-400 hover:w-10 hover:h-10 transition-all" />
        </a>
      </div>
    </header>
  );
}
