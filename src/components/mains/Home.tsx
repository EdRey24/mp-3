import {Bio, BioParagraph, Heading3, IntroParagraph, MainImage} from "./Home.styles.ts";
import {Main} from "./Mains.styles.ts";

export default function Home(){
    return (
        <Main>
            {/*One Column start*/}
            <Heading3>Home</Heading3>
            <Bio>
                {/*Two-column layout for profile-pic and career-object*/}
                <MainImage src="../../../public/profile.jpg" alt="Edward Reyna"/>
                <BioParagraph>
                    My name is Edward Reyna, and I am Sophomore at Boston University currently studying
                    Computer Science. I want to explore as many subtopics in the major as I possibly can.
                    I'm currently looking for an internship for Summer 2026, so if you've got opportunities let
                    me know.
                </BioParagraph>
                {/*End of two column*/}
            </Bio>
            <IntroParagraph>
                Welcome to my website, here you will find my <strong><em><u>Education</u></em></strong> and <strong><em><u>Professional Experience</u></em></strong> history; as well as other information that might be
                of interest to you.
            </IntroParagraph>
            {/*One Column end*/}
        </Main>
    );
}