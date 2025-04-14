import { ProdMatchingForm } from "./ProdMatchingForm.jsx"
import { CodeSample } from "../CodeSample/CodeSample.jsx"
import { prodMatchingAlgoString } from "./prodMatchingAlgo.js"

export const ProdMatchingView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Product Matching</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>This exercise uses the same data as the previous one.</p>
                <p>
                    Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.
                </p>
                <p>
                    The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:
                </p>
                <pre><code>
                    abcde
                    fghij
                    klmno
                    pqrst
                    fguij
                    axcye
                    wvxyz
                </code></pre>
                <p>
                    The IDs <code>abcde</code> and <code>axcye</code> are close, but they differ by two characters (the second and fourth). However, the IDs <code>fghij</code> and <code>fguij</code> differ by exactly one character, the third (h and u). Those must be the correct boxes.
                </p>
                <p>
                    What letters are common between the two correct box IDs?
                </p>
                <p>
                    In the example above, this is found by removing the differing character from either ID, producing <code>fgij</code>.
                </p>
                <details>
                    <summary>Correct answer</summary>
                    <p>Your algorithm is correct if it identifies <code>uwfmdjxyxlbgnrotcfpvswaqh</code></p>
                </details>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>In this challenge, I am looking for the id which matches another id in the array, aside from one letter in the same position. The challenge provides the correct answer, so should be able to check easily!</p>
                <p>The user cannot input here, because of the specific nature of this challenge to the dataset.</p>
                <p>I will iterate the array, then for each id, further iterate with a nested loop.</p>
                <p>This will give me the ability to compare every id to every other id in the array.</p>
                <p>I will compare 2 id's at a time by checking each character of the string, and if only 1 is different at the same position, return that string with the mixmatched letter removed.</p>
                <p></p>
                <p></p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <ProdMatchingForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={prodMatchingAlgoString} />
            </div>
        </article>
    </>)
}