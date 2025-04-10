import { WordsPalForm } from "./WordsPalForm"
import { CodeSample } from "../CodeSample/CodeSample"
import { wordsPalAlgoString } from "./wordsPalAlgo"

export const WordsPalView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Words Palindrome</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>
                    A palindromic word reads the same both ways. The longest English palindrome is <em>"tattarrattat"</em>, which means "the sound of a knock on the door".
                </p>
                <p>
                    Write a function that takes a word as input, and returns a boolean indicating if the word is a palindrome.
                </p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>Once again, the algorithm to solve this problem is quite simple at its core.
                    However, I will make this more of a game where users enter as many palindromes as they can think of.</p>
                <p>The algorithm will essentially take the user input string, split each character into an array, reverse the array, and then join back together. The reversed string and orginal string will then be compared.</p>
                <p>If this algorithm resolves as true, the user will gain 1 point, and the word will be saved to the word bank. Otherwise they will lose and reset score to 0.</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <WordsPalForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={wordsPalAlgoString} />
            </div>
        </article>
    </>)
}