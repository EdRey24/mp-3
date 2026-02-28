import {ContentContainer, Heading2, Heading3, Heading4, Main} from "./Mains.styles.ts";

export default function Education(){
    return (
        <Main>
            <ContentContainer>
                <Heading2>Boston University</Heading2>
                <Heading3>Bachelor of Arts in Computer Science (GPA: 3.82 / 4.00)</Heading3>
                <Heading4>May 2028</Heading4>
                <Heading4>Boston, MA</Heading4>
                <ul>
                    <li>Introduction to Computer Science II (Java)</li>
                    <li>Geometric Algorithms (Linear Algebra/Python)</li>
                    <li>Computer Systems (Assembly & C)</li>
                    <li>Probability in Computing</li>
                    <li>Analysis of Algorithms</li>
                    <li>Concepts of Programming Languages (OCaml)</li>
                    <li>Web Application Development</li>
                    <li>Software Engineering</li>
                </ul>
            </ContentContainer>

            <ContentContainer>
                <Heading2>South Texas College</Heading2>
                <Heading3>Associate of Science in Computer Science (GPA: 4.00 / 4.00)</Heading3>
                <Heading4>May 2024</Heading4>
                <Heading4>McAllen, TX</Heading4>
                <ul>
                    <li>Computer Organization (Assembly)</li>
                    <li>Intro to Programming I-III (C++)</li>
                    <li>C Programming (C)</li>
                    <li>AP Computer Science (Java)</li>
                </ul>
            </ContentContainer>
        </Main>
    );
}