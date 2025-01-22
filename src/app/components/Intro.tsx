import { spline } from "@/assets/fonts/spline";
import { ContentBullet } from "./Intro/content-bullet";
import StickyBar from "./layouts/sticky-bar";
import GithubSvg from "./svg/Github";
import LinkedinSvg from "./svg/Linkedin";
import EmailSvg from "./svg/Email";

export default function Intro() {
  return (
    <StickyBar
      title="Marissa Vargas Sánchez"
      subtitle="Fullstack Developer"
      paragraph="I like to craft creative and innovative digital products."
    >
      <nav>
        <ul
          className={`${spline.className} text-moody-blue-400 font-semibold hidden h-40 lg:block`}
        >
          <ContentBullet content="about" />
          <ContentBullet content="relevant experience" />
          <ContentBullet content="projects" />
        </ul>
      </nav>
      <div className="flex flex-row my-4">
        <a
          href="https://www.linkedin.com/in/marissa-vargas-sanchez/"
          className="flex items-center justify-center w-14 h-14"
          target="_blank"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <LinkedinSvg className="hover:fill-moody-blue-400 hover:w-10 hover:h-10 transition-all" />
        </a>
        <a
          href="https://github.com/thatmare"
          className="flex items-center justify-center w-14 h-14"
          target="_blank"
          aria-label="GitHub (opens in a new tab)"
        >
          <GithubSvg className="hover:fill-moody-blue-400 hover:w-10 hover:h-10 transition-all" />
        </a>
        <a
          href="mailto:marissa.lorena@hotmail.com"
          className="flex items-center justify-center w-14 h-14"
          target="_blank"
          aria-label="Email (opens in a new window to send email)"
        >
          <EmailSvg className="hover:fill-moody-blue-400 hover:w-10 hover:h-10 transition-all" />
        </a>
      </div>
    </StickyBar>
  );
}
