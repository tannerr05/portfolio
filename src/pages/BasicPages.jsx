import { Link } from "react-router";
import photo from "../assets/me.jpg"
export function Home() {
    return <section><h1>Tanner Rolnicki</h1>
    <img src={photo} />
    <p>Computer science undergraduate attending Saint Louis University</p>
    <Link to="/projects">Explore my projects</Link></section>;
}
export function Experience() {
    return <section><h1>Experience</h1>
    <p>Replace this with education, skills, and contributions.</p></section>;
}
export function Contact() {
    return <section><h1>Contact</h1>
    <p>Email: tanner.rolnicki@slu.edu</p></section>;
}
export function NotFound() {
    return <section><h1>Page not found</h1>
    <Link to="/">Return home</Link></section>;
}