import { FreqDupForm } from "./FreqDupForm.jsx";
import { CodeSample } from "../CodeSample/CodeSample.jsx";
import { freqDupAlgoString } from "./freqDupAlgo.js";

export const FreqDupView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Frequency of Duplicates</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>This exercise uses the same data as the previous one.</p>
                <p>You notice that the communication device repeats the same frequency change list over and over. To calibrate the device, you need to find the first frequency it reaches twice.</p>
                <p>For example, using the same list of changes above, the device would loop as follows:</p>
                <ul>
                    <li>Current frequency  0, change of +1; resulting frequency  1.</li>
                    <li>Current frequency  1, change of -2; resulting frequency -1.</li>
                    <li>Current frequency -1, change of +3; resulting frequency  2.</li>
                    <li>Current frequency  2, change of +1; resulting frequency  3.</li>
                    <li>(At this point, the device continues from the start of the list.)</li>
                    <li>Current frequency  3, change of +1; resulting frequency  4.</li>
                    <li>Current frequency  4, change of -2; resulting frequency  2, which has already been seen.</li>
                </ul>
                <p>In this example, the first frequency reached twice is <strong>2</strong>. Note that your device might need to repeat its list of frequency changes many times before a duplicate frequency is found, and that duplicates might be found while in the middle of processing the list.</p>
                <h4><u>Helpful Hint</u></h4>
                <p>Don't look at the hint unless you're stuck, or you feel you have a successful algorithm.</p>
                <details>
                    <summary>Duplicate frequency</summary>
                    <p>55250</p>
                </details>

            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>The data for this challenge is copied from the previous, with new algorithm to solve more complex problem.</p>
                <p>First challenge was to iterate the array of values repeatedly from beginning to end until duplicate is found. I accomplished this by using an interator count variable which I manually incremented until it reached the array length, then rest back to 0.</p>
                <p>This iteration was placed inside of a while loop, to continuously iterate until duplicate was found, which exited while loop.</p>
                <p>Inside the while loop, I constructed a table to store key/value pairs, if the key value for our current frequency total was already present in the table, it means it is a duplicate. At that point, exit the loop and return the current frequency total!</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <FreqDupForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={freqDupAlgoString} />
            </div>
        </article>
    </>)
}