
import { useState } from "react";
import { BuildStaircaseForm } from "./BuildStaircaseForm";
import { CodeSample } from "../CodeSample/CodeSample";
import { buildStaircaseAlgoString } from "./BuildStaircaseAlgo";

export const BuildStaircaseView = () => {
    const [staircase, setStaircase] = useState('');

    return (<>
        <header className="header">
            <h1 className="header-heading">Build a Staircase</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>This is a staircase of size:</p>
                <pre>
                    {`
                 #
                ##
               ###
              ####
             #####
            ######`}
                </pre>
                <p>Its base and height are both equal to 6. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.</p>
                <p>Write a program that prints a staircase of size <em>n</em>.</p>
                <h4><u>Function Description</u></h4>
                <p>The function should accept a number as input. This number is the height and width of the staircase.</p>
                <p>Print a staircase as described above.</p>
                <h4><u>Function Constraints</u></h4>
                <p>The number specified for height and width should be greater than 0 and less than 100.</p>
                <h4><u>Output Format</u></h4>
                <p>Print a staircase of size <em>n</em> using # symbols and spaces.</p>
                <h4><u>Sample Input</u></h4>
                6
                <h4><u>Sample Output</u></h4>
                <pre>
                    {`
                 #
                ##
               ###
              ####
             #####
            ######`}
                </pre>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>My first impression is to make this interactive, so that the user controls the 'n' number input. This also means instead of printing to console, I will contruct my function to return the outcome to the DOM.</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <BuildStaircaseForm setStaircase={setStaircase} />
                <div>
                    <h3>Staircase:</h3>
                    <pre>
                        {staircase}
                    </pre>
                </div>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Algorithmic Solution</h2>
                <CodeSample codeString={buildStaircaseAlgoString} />
            </div>
        </article>
    </>)
}