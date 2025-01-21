import { StickyTitle } from "./sticky-title";

export default function About() {
  return (
    <section className="mb-20 lg:py-20 lg:mb-0" id="about">
      <StickyTitle title="about" />
      <div className="px-8">
        <p className="font-light leading-relaxed">
          I am a resilient and adaptable software professional with over 2 years
          of experience in fullstack software development in startups.
          <br />
          <br />
          I have built products for startups, ranging from enterprise apps to
          e-commerces, impacting positive outcomes through advanced data
          modeling, seamless API integration, and intuitive UI/UX design.
          <br />
          <br />
          <span className="font-bold text-moody-blue-200/80">
            I consider that the skills I acquired from the humanities field
            define me as a fullstack programmer
          </span>
          , as analytical and communication abilities are crucial for
          problem-solving and teamwork.
        </p>
      </div>
    </section>
  );
}
