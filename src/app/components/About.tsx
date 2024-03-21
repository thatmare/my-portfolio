import { Spline_Sans_Mono } from "next/font/google";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

export default function About() {
  return (
    <section className="mb-20">
      <div className="sticky top-0 w-full backdrop-blur-sm px-8 py-4">
        <h3
          className={`${spline.className} font-semibold tracking-widest text-moody-blue-400`}
        >
          about
        </h3>
      </div>
      <div className="px-8">
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
