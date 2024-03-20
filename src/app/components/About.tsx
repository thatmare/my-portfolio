import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"]
})

export default function About() {
  return (
    <section className="px-8">
      <div>
      <h1 className={`${playfair.className} text-4xl font-bold py-8 text-moody-blue-200`}>Marissa Vargas Sánchez</h1>
        <h2 className="text-xl font-semibold py-6 ">Frontend Developer</h2>
        <p className="font-light">
          I find digital product development to be a creative activity with the
          potential to ease __ lives.
        </p>
      </div>
      <div>
        <a href="https://github.com/thatmare">
          <Image
            src={"images/github-alt.svg"}
            width={32}
            height={32}
            alt="GitHub profile"
          ></Image>
        </a>
        <a href="https://www.linkedin.com/in/thatmare/">
          <Image
            src={"images/linkedin.svg"}
            width={32}
            height={32}
            alt="GitHub profile"
          ></Image>
        </a>
      </div>
      <div>
        <h2 className={`${playfair.className} text-xl font-bold py-8 text-moody-blue-200`}>ABOUT</h2>
        <p>
          In 2022 I decided to pivot in my professional life: I started to code.
          Back in the day, I had an editorial project for which I needed to
          create a website - I said to myself, why not? And that’s how it all
          started.
          <br />
          I studied Applied Linguistics in university. As a former language
          teacher, I spent my afternoons learning about CSS and JavaScript. I
          realized something that never occurred to me: coding is a creative
          activity. Slow but steady, I fell in love with it.
          <br />
          Nowadays, as a developer, my main focus is in the frontend side of
          buidling digital products. I find beauty in landing designs and
          amicably integrating backend services. I consider that the skills I
          acquired from the humanities field define me as a front-end
          programmer, as analytical and communication abilities are crucial for
          problem-solving and teamwork. And, honestly, it’s satisfying to solve
          a programming challenge.
        </p>
      </div>
    </section>
  );
}
