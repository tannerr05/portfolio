import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
        return <section><h1>Project not found</h1>
        <Link to="/projects">Browse all projects</Link></section>;
    }
    return <article>
        <h1>{project.title}</h1>
        <p>{project.technologies.join(", ")}</p>
        <h2>Summary</h2><p>{project.summary}</p>
        <Link to="/projects">Back to projects</Link>
    </article>;
}