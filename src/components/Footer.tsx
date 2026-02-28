import {CreditsLink, Footerr} from "./Footer.styles.ts";


export default function Footer(){
    return(
        <Footerr>
            <h3 id="credits">All rights reserved &#169; <CreditsLink to={``}>Credits</CreditsLink></h3>
        </Footerr>
    );
}