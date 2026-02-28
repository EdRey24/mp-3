import {Link} from "react-router";

export default function Footer(){
    return(
        <footer>
            <h3 id="credits">All rights reserved &#169; <Link to={``}>Credits</Link></h3>
        </footer>
    );
}