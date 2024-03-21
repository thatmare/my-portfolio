import Image from "next/image";
import data from "@/app/data/projects.json";
import { Spline_Sans_Mono } from "next/font/google";
import LinkSvg from "./svg/Link";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <section className="mb-20">
      <div className="sticky top-0 w-full backdrop-blur-sm z-10">
        <h3
          className={`${spline.className} font-semibold tracking-widest px-8 py-4 text-moody-blue-400`}
        >
          projects
        </h3>
      </div>
      <div className="px-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            // className="mb-8 border-2 border-moody-blue-800 rounded-md p-2 grid sm:grid-cols-3"
            className="mb-8 p-2 grid sm:grid-cols-3"
          >
            <div className="sm:col-span-2">
              <div className="flex items-center">
                <LinkSvg className="fill-moody-blue-200/90 mr-2" />
                <a href={project.link}>
                  <h4 className="font-bold text-moody-blue-200 tracking-wider text-lg py-2">
                    {project.title}
                  </h4>
                </a>
              </div>
              <p className="py-2 font-extralight leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap py-2">
                {project.skills.map((skill, i) => (
                  <li
                    key={i}
                    className={`${spline.className} bg-moody-blue-950 text-moody-blue-400  flex items-center rounded-full py-1 px-3 m-1 text-xs`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:order-first">
              <Image src={project.image} width={120} height={70} alt="" className="rounded-lg sm:mx-auto sm:py-4"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
