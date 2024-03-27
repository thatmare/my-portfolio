import Image from "next/image";
import data from "@/app/data/projects.json";
import { Spline_Sans_Mono } from "next/font/google";
import LinkSvg from "./svg/Link";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <section className="mb-20 lg:py-12 lg:mb-0" id="projects">
      <div className="sticky top-0 w-full backdrop-blur-sm z-10 lg:hidden">
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
            className="mb-8 grid sm:grid-cols-4 py-4"
          >
            <div className="sm:col-span-3 lg:ml-5">
              <div className=" group"> {/* layout de link */}
                <a href={project.link} target="_blank" aria-label={project.linkAlt}>
                <LinkSvg className="fill-moody-blue-200/90 mr-2 group-hover:fill-moody-blue-400 group-hover:w-5 group-hover:h-5 transition-all" />
                  <h4 className="font-bold text-moody-blue-200 tracking-wider text-lg group-hover:text-moody-blue-400 group-hover:text-xl transition-all">
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
              <Image src={project.image} width={120} height={70} alt={project.imgAlt} className="rounded-md sm:my-2"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
