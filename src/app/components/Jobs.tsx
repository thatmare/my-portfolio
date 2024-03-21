import data from "@/app/data/jobs.json";
import { Spline_Sans_Mono } from "next/font/google";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

export default function Jobs() {
  return (
    <section className="mb-20">
      <div className="sticky top-0 w-full backdrop-blur-sm">
        <h3
          className={`${spline.className} font-semibold tracking-widest px-8 py-4 text-moody-blue-400`}
        >
          relevant experience
        </h3>
      </div>
      <div className="px-8">
        {data.jobs.map((job, index) => (
          <div key={index} className="mb-8">
            <h4 className="font-bold text-moody-blue-200 tracking-wider text-lg py-2">
              {job.title} • {job.place}
            </h4>
            <p className="text-sm font-extralight py-2">{job.period}</p>
            <p className="py-2 leading-relaxed">{job.description}</p>
            <ul className="flex flex-wrap py-2">
              {job.skills.map((skill, i) => (
                <li
                  key={i}
                  className={`${spline.className} bg-moody-blue-950 text-moody-blue-400  flex items-center rounded-full py-1 px-3 m-1 text-xs`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
