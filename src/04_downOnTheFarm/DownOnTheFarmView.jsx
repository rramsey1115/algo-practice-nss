import { DownOnTheFarmForm } from "./DownOnTheFarmForm"
import { CodeSample } from "../CodeSample/CodeSample.jsx";
import { DownOnTheFarmAlgoString } from "./downOnTheFarmAlog.js";

export const DownOnTheFarmView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Down on the Farm</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>

                <h4><u>Example Problem 1</u></h4>
                <p>
                    A quarter of the animals on a farm have 4 legs. The remaining three quarters of the animals have two legs.
                    If there are 60 legs overall, how many of animals are there on the farm?
                </p>
                <details>
                    <summary>Answer</summary>
                    <p style={{ marginLeft: "18px" }}><strong>24</strong></p>
                </details>
                <h4><u>Instructions</u></h4>
                <p>Write some JavaScript functions that will allow you to calculate the number of animals when any of the following parameters change:</p>
                <ul>
                    <li>Total number of legs</li>
                    <li>Percentage of animals with a certain number of legs</li>
                    <li>The number of legs for each group</li>
                </ul>
                <p>For example, your functions should be able to solve this variation:</p>
                <h4><u>Example Problem 2</u></h4>
                <p>
                    Forty percent of the animals on a farm have three legs. The remaining 60 percent of the animals have four legs.
                    If there are 180 legs overall, how many animals are there on the farm?
                </p>
                <details>
                    <summary>Answer</summary>
                    <p style={{ marginLeft: "18px" }}><strong>50</strong></p>
                </details>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>Since the legs, ratios, and total animals are all variable, I want to user to be able to select these variables! Added challenge in managing input values and state.</p>
                <p>My first task was to implement an intuitive and styled form to gather data in correct format using React and MUI.</p>
                <p>Algorithmically, the problem was simply a math problem, with variables to be plugged in!</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <DownOnTheFarmForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={DownOnTheFarmAlgoString} />
            </div>
        </article >
    </>)
}