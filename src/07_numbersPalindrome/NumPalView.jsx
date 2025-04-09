import { NumPalForm } from "./NumPalForm"
import { numPalAlgoString } from "./numPalAlgo"
import { CodeSample } from "../CodeSample/CodeSample.jsx"

export const NumPalView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Numbers Palindrome</h1>

        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <h4><u>Palindrome Numbers</u></h4>
                <p>A <strong>palindromic number</strong> reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is:</p>
                <h4>9009 = 91 × 99</h4>
                <p><strong>Challenge:</strong> Find the largest palindrome made from the product of two 3-digit numbers.</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <NumPalForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={numPalAlgoString}/>
            </div>
        </article>
    </>)
}