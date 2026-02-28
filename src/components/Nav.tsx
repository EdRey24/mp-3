import {Link} from "react-router";

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/experiences.html">Experiences</Link></li>
                <li><Link to="/education.html">Education</Link></li>
                <li><Link to="/projects.html">Projects</Link></li>
                <li><Link to="/awards.html">Awards</Link></li>
                <li><Link to="/leadership.html">Leadership</Link></li>
            </ul>
        </nav>
    );
}