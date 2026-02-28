
export default function Home(){
    return (
        <main id="main">
            {/*One Column start*/}
            <h3>Home</h3>
            <div id="bio">
                {/*Two-column layout for profile-pic and career-object*/}
                <img src="../../../public/profile.jpg" alt="Edward Reyna"/>
                <p>
                    My name is Edward Reyna, and I am Sophomore at Boston University currently studying
                    Computer Science. I want to explore as many subtopics in the major as I possibly can.
                    I'm currently looking for an internship for Summer 2026, so if you've got opportunities let
                    me know.
                </p>
            </div>
            {/*End of two column*/}
            <p id="intro">
                Welcome to my website, here you will find my
                <strong><em><u>Education</u></em></strong>
                and <strong><em><u>Professional Experience</u></em></strong>
                history; as well as other information that might be
                of interest to you.
            </p>
            {/*One Column end*/}
        </main>
    );
}