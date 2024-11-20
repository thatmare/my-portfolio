import data from "@/app/data/jobs.json";
import { spline } from "@/assets/fonts/spline";
import { StickyTitle } from "./sticky-title";

export default function Jobs() {
  return (
    <section className="mb-20 lg:py-12 lg:mb-0" id="experience">
      <StickyTitle title="relevant experience" />
      <div className="px-8">
        {data.jobs.map((job, index) => (
          <div key={index} className="mb-8 grid sm:grid-cols-3">
            <div>
              <p className="font-extralight text-sm sm:py-1">{job.period}</p>
            </div>
            <div className="sm:col-span-2">
              <h4 className="font-bold text-moody-blue-200 tracking-wider text-lg">
                {job.title} • {job.place}
              </h4>
              <p className="leading-relaxed py-2">{job.description}</p>
              <ul className="flex flex-wrap py-2">
                {job.skills.map((skill, i) => (
                  <li
                    key={i}
                    className={`${spline.className} bg-moody-blue-950 text-moody-blue-300 font-medium flex items-center rounded-full py-1 px-3 m-1 text-xs`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
