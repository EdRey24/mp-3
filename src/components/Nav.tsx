import {NavLi, NavLink, NavUl, Navv} from "./Nav.styles.ts"


export default function Nav(){
    return(
        <Navv>
            <NavUl>
                <NavLi><NavLink to="/">Home</NavLink></NavLi>
                <NavLi><NavLink to="/experiences">Experiences</NavLink></NavLi>
                <NavLi><NavLink to="/education">Education</NavLink></NavLi>
                <NavLi><NavLink to="/projects">Projects</NavLink></NavLi>
                <NavLi><NavLink to="/awards">Awards</NavLink></NavLi>
                <NavLi><NavLink to="/leadership">Leadership</NavLink></NavLi>
            </NavUl>
        </Navv>

    );
}