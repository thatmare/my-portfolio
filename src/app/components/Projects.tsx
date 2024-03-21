import data from "@/app/data/projects.json";

export default function Projects() {
  return (
    <section>
      <h3>Projects</h3>
      {data.projects.map((project, index) => (
        <div key={index}>
          <a href={project.link}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <ul>
              {project.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </a>
        </div>
      ))}
    </section>
  );
}
