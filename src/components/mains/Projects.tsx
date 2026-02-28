import {useState} from "react";
import {ContentContainer, Heading3, Main} from "./Mains.styles.ts";
import {CalcButton, CalcContainer, CalcInput, CalcLabel, CalcOutput, Heading2, ProjectLink} from "./Projects.styles.ts";

export default function Projects(){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    const operation = (op: string) => {
        const num1 = Number(input1);
        const num2 = Number(input2);
        switch (op) {
            case "+":
                setOutput(num1 + num2);
                break;
            case "-":
                setOutput(num1 - num2);
                break;
            case "*":
                setOutput(num1 * num2);
                break;
            case "/":
                setOutput(num1 / num2);
                break;
            case "**":
                setOutput(num1 ** num2);
                break;
            default:
                setOutput(0);
                setInput1("");
                setInput2("");
                break;
        }
    }

    return (
        <Main>
            <ContentContainer>
                <Heading3><ProjectLink to="https://github.com/GoogleCloudPlatform/cloud-run-mcp" target="_blank">Google Cloud Run MCP
                    Server</ProjectLink> | JavaScript, Google Cloud, Docker, Gemini AI, MCP</Heading3>
                <ul>
                    <li>Streamlined server configuration by implementing environment variable-based defaults, improving
                        developer efficiency.
                    </li>
                    <li>Enhanced server security and simplified authentication by integrating Google Cloud Platform
                        authentication verification, minimizing manual credential management.
                    </li>
                </ul>
            </ContentContainer>
            <ContentContainer>
                <Heading3>CLI Wordle + AI | Python</Heading3>
                <ul>
                    <li>Developed a CLI-based Wordle game in Python, featuring a curated 12,000+ word dictionary and a
                        real-time visual feedback system utilizing three distinct color indicators (green, yellow, grey)
                        for intuitive guess evaluation.
                    </li>
                    <li>Designed and implemented an AI-powered guess recommendation engine leveraging efficient word
                        filtering and pattern matching algorithms, to provide statistically optimal suggestions in under
                        50 milliseconds.
                    </li>
                </ul>
            </ContentContainer>
            <ContentContainer>
                <Heading3><ProjectLink to="https://github.com/EdRey24/CashAlert" target="_blank">Cash Alert</ProjectLink> | Google App Script,
                    HTML, Google Sheets, Gmail</Heading3>
                <ul>
                    <li>Designed a free solution for organizing school/community fundraisers through Google App Script,
                        HTML, Google Sheets, and Gmail.
                    </li>
                    <li>Provided weekly email reminders and payment management to student organizations, addressing
                        limitations of costly and restrictive alternatives.
                    </li>
                </ul>
            </ContentContainer>

            <ContentContainer>
                <CalcContainer>
                    <Heading2>Edward's Calculator</Heading2>
                    <CalcLabel htmlFor="first-num">Enter first number</CalcLabel>
                    <CalcInput type="text"
                           id="first-num"
                           value={input1}
                           onChange={(e) => {setInput1(e.target.value)}}
                    />
                    <CalcLabel htmlFor="second-num">Enter second number</CalcLabel>
                    <CalcInput type="text"
                           id="second-num"
                           value={input2}
                           onChange={(e) => {setInput2(e.target.value)}}
                    />
                    <CalcButton onClick={() => operation("+")}>+</CalcButton>
                    <CalcButton onClick={() => operation("-")}>-</CalcButton>
                    <CalcButton onClick={() => operation("*")}>*</CalcButton>
                    <CalcButton onClick={() => operation("/")}>/</CalcButton>
                    <CalcButton onClick={() => operation("**")}>**</CalcButton>
                    <CalcButton onClick={() => operation("clear")}>Clear</CalcButton>
                    <CalcOutput>{output}</CalcOutput>
                </CalcContainer>
            </ContentContainer>
        </Main>
    );
}