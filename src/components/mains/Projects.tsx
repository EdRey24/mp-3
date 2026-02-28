import {useState} from "react";

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
                break;
        }
    }

    return (
        <main>
            <div className="content-container">
                <h3><a href="https://github.com/GoogleCloudPlatform/cloud-run-mcp" target="_blank">Google Cloud Run MCP
                    Server</a> | JavaScript, Google Cloud, Docker, Gemini AI, MCP</h3>
                <ul>
                    <li>Streamlined server configuration by implementing environment variable-based defaults, improving
                        developer efficiency.
                    </li>
                    <li>Enhanced server security and simplified authentication by integrating Google Cloud Platform
                        authentication verification, minimizing manual credential management.
                    </li>
                </ul>
            </div>
            <div className="content-container">
                <h3>CLI Wordle + AI | Python</h3>
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
            </div>
            <div className="content-container">
                <h3><a href="https://github.com/EdRey24/CashAlert" target="_blank">Cash Alert</a> | Google App Script,
                    HTML, Google Sheets, Gmail</h3>
                <ul>
                    <li>Designed a free solution for organizing school/community fundraisers through Google App Script,
                        HTML, Google Sheets, and Gmail.
                    </li>
                    <li>Provided weekly email reminders and payment management to student organizations, addressing
                        limitations of costly and restrictive alternatives.
                    </li>
                </ul>
            </div>

            <div id="calc-container" className="content-container">
                <h2>Edward's Calculator</h2>
                <label htmlFor="first-num">Enter first number</label>
                <input type="text"
                       id="first-num"
                       value={input1}
                       onChange={(e) => {setInput1(e.target.value)}}
                />
                <label htmlFor="second-num">Enter second number</label>
                <input type="text"
                       id="second-num"
                       value={input2}
                       onChange={(e) => {setInput2(e.target.value)}}
                />
                <button onClick={() => operation("+")}>+</button>
                <button onClick={() => operation("-")}>-</button>
                <button onClick={() => operation("*")}>*</button>
                <button onClick={() => operation("/")}>/</button>
                <button onClick={() => operation("**")}>**</button>
                <button onClick={() => operation("clear")}>Clear</button>
                <h3 id="output">{output}</h3>
            </div>
        </main>
    );
}