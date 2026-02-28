import {ContentContainer, Heading2, Heading3, Heading4, Main} from "./Mains.styles.ts";

export default function Experiences(){
    return (
        <Main>
            <ContentContainer>
                <Heading2>Boston University</Heading2>
                <Heading3>Learning & Event Technology Services (LETS) IT Support Specialist</Heading3>
                <Heading4>Sep 2024 - Present</Heading4>
                <Heading4>Boston, MA</Heading4>
                <ul>
                    <li>Deliver exceptional on-site AV/IT support for 100+ classrooms across Boston University’s 17
                        schools and colleges.
                    </li>
                    <li>Resolve 90% of urgent faculty support requests within 15 minutes, minimizing disruptions to live
                        classes.
                    </li>
                </ul>
            </ContentContainer>

            <ContentContainer>
                <Heading2>Google</Heading2>
                <Heading3>Associate Software Developer Intern</Heading3>
                <Heading4>May 2025 - Aug 2025</Heading4>
                <Heading4>Seattle, WA</Heading4>
                <ul>
                    <li>Spearheaded deployment and configuration of Model Context Protocol (MCP) Servers on Google Cloud
                        Run, expanding access to critical public and internal Google Cloud resources (e.g., BigQuery).
                    </li>
                    <li>Directly enhanced Gemini product's capabilities by enabling access to 4+ previously inaccessible
                        tools, through MCP servers, leading to an improvement in accuracy and quality of its responses.
                    </li>
                    <li>Contributed to the official Google Cloud Run MCP server on GitHub, implementing default
                        configuration functionality and robust authentication checks during server startup to enhance
                        stability and security.
                    </li>
                </ul>
            </ContentContainer>

            <ContentContainer>
                <Heading2>Jane Street</Heading2>
                <Heading3>Academy of Math and Programming Student</Heading3>
                <Heading4>June 2024 - Aug 2024</Heading4>
                <Heading4>New York City, NY</Heading4>
                <ul>
                    <li>Mastered advanced mathematics, computer programming, data analysis, and game theory as a student
                        of the Academy of Math and Programming (AMP) through a rigorous and interactive STEM curriculum.
                    </li>
                    <li>Won 5th place in Jane Street’s Electronic Trading Competition by implementing trading strategies
                        using Python.
                    </li>
                    <li>Recognized as one of less than 80 recent high school graduates to the program with over 2,000
                        applicants.
                    </li>
                </ul>
            </ContentContainer>
        </Main>
    );
}