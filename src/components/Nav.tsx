import {NavLi, NavLink, NavUl, Navv} from "./Nav.styles.ts"


export default function Nav(){
    return(
        <Navv>
            <NavUl>
                <NavLi><NavLink to="/">Home</NavLink></NavLi>
                <NavLi><NavLink to="/experiences.html">Experiences</NavLink></NavLi>
                <NavLi><NavLink to="/education.html">Education</NavLink></NavLi>
                <NavLi><NavLink to="/projects.html">Projects</NavLink></NavLi>
                <NavLi><NavLink to="/awards.html">Awards</NavLink></NavLi>
                <NavLi><NavLink to="/leadership.html">Leadership</NavLink></NavLi>
            </NavUl>
        </Navv>

    );
}