import "../styles/AlgoViews.css"
import { codeString } from "./sumMultiplesAlgo";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { SumMultiplesForm } from "./sumMultiplesForm";

export const SumMultiplesView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Sum of Multiples</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
                <p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
                <p><em>
                    My version of this tool allows you to explore the same
                    logic with your own custom values!
                </em></p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>First impression is that I need a loop of some sort, with a variable to hold the total sum.</p>
                <p>Decided for simplicity to use a for loop, starting the iterator at 1 - counting up to 'range' (not inclusive).</p>
                <p>Next step was to decide to use an 'if' statement or shorthand, I opted for the short-circuiting logical AND expression since it is a pretty simple problem, which saved a few lines of code without becoming unreadable.</p>
                <p>Next I used the modulus '%' operator to check if current number was evenly divisible by either of the given nums. If returned true to either condition, I added the current number to sum.</p>
                <p>Final step, after loop has finished executing, return the sum!</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>

                <SumMultiplesForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Algorithmic Solution</h2>
                <p><em>See the JavaScript code that implements the logic described above</em></p>
                <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    customStyle={{
                        borderRadius: '12px',
                        padding: '8px',
                        fontSize: '12px'
                    }}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </article>
    </>)
}