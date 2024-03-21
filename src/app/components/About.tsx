import { Spline_Sans_Mono } from "next/font/google";
import GithubSvg from "./svg/Github";
import LinkedinSvg from "./svg/Linkedin";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

export default function About() {
  return (
    <section className="px-8 mb-20">
      <div className="mb-20">
        <h1
          className={`${spline.className} text-3xl font-medium pt-20 text-moody-blue-200/90 tracking-widest`}
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
      <div>
        <h3
          className={`${spline.className} font-semibold tracking-widest py-8 text-moody-blue-200/90`}
        >
          about
        </h3>
        <p className="font-light leading-relaxed">
          In 2022 I decided to pivot in my professional life: I started to code.
          In that time, I had a project for which I needed to create a website -
          I said to myself, why not? And that’s how it all started.
          <br />
          <br />I studied Applied Linguistics in university. As a former
          language teacher, I spent my afternoons learning about CSS and
          JavaScript. I realized something that never occurred to me:{" "}
          <span className="font-bold text-moody-blue-200/80">
            coding is a creative activity.
          </span>{" "}
          Slow but steady, I fell in love with it.
          <br />
          <br />
          Nowadays, as a developer, my main focus is in the frontend side of
          buidling digital products. I find beauty in landing designs.{" "}
          <span className="font-bold text-moody-blue-200/80">
            I consider that the skills I acquired from the humanities field
            define me as a frontend programmer
          </span>
          , as analytical and communication abilities are crucial for
          problem-solving and teamwork. And, honestly, it’s satisfying to solve
          a programming challenge.
        </p>
      </div>
    </section>
  );
}
