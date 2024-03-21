import data from "@/app/data/projects.json";
import { Spline_Sans_Mono } from "next/font/google";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <section className="px-8">
      <h3
        className={`${spline.className} font-semibold tracking-widest py-8 text-moody-blue-400/80`}
      >
        projects
      </h3>
      {data.projects.map((project, index) => (
        <a href={project.link} key={index}>
          <div className="mb-8">
            <h4 className="font-bold text-moody-blue-200 tracking-wider text-lg py-2">{project.title}</h4>
            <p className="py-2 font-extralight">{project.description}</p>
            <ul className="flex flex-wrap py-2">
              {project.skills.map((skill, i) => (
                <li key={i} className={`${spline.className} bg-moody-blue-950 text-moody-blue-400  flex items-center rounded-full py-1 px-3 m-1 text-xs`}>{skill}</li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </section>
  );
}
