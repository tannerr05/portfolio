import { Link } from "react-router";
import photo from "../assets/me.jpg"
export function Home() {
    return <section><h1>Tanner Rolnicki</h1>
    <img src={photo} className="selfie" />
    <p>Computer science undergraduate attending Saint Louis University. Studying Computer Science and Forensic Science with an interest in pursuing digital forensics and private investigation.</p>
    <Link to="/projects">Explore my projects</Link></section>;
}
export function Experience() {
    return <section><h1>Experience</h1>
    <p>
        Graduated from Lindbergh High School in 2024<br />
        Currently studying at Saint Louis University<br />
        <br />
        Skills: Programming, Math, Problem Solving, Teamwork<br />
        <br />
        Designed a graphical wheel spinning program using C++ and Qt for a video game speedrun tournament<br />
        Worked as a team to design a functional video game using C++ and Qt
        </p></section>;
}
export function Contact() {
    return <section><h1>Contact</h1>
    <p>Email: tanner.rolnicki@slu.edu</p></section>;
}
export function NotFound() {
    return <section><h1>Page not found</h1>
    <Link to="/">Return home</Link></section>;
}