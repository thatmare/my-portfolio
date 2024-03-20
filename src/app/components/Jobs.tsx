import data from "@/app/data/jobs.json";

export default function Jobs() {
    return (
        <section>
            {data.jobs.map((job, index) => (
                <div key={index}>
                    <h2>{job.title}</h2>
                    <p>{job.place}</p>
                    <p>{job.period}</p>
                    <ul>
                        {job.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                    <p>{job.description}</p>
                </div>
            ))}
        </section>
    );
}
