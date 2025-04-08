
import { CodeSample } from "../CodeSample/CodeSample.jsx";
import { theProfessorAlgoString } from "./theProfessorAlgo.js";
import { TheProfessorForm } from "./TheProfessorForm";

export const TheProfessorView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">The Professor</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>
                    HackerLand University has the following grading policy:
                </p>

                <ul>
                    <li>Every student receives a grade in the inclusive range from 0 to 100.</li>
                    <li>Any grade less than 40 is a failing grade.</li>
                </ul>

                <p>
                    Latitia is a professor at the university and likes to round each student's score
                    according to these rules:
                </p>

                <ul>
                    <li>If the difference between the grade and the next multiple of 5 is less than 3, round the grade up to the next multiple of 5.</li>
                    <li>If the value of the grade is less than 38, no rounding occurs as the result will still be a failing grade.</li>
                </ul>

                <h4><u>Examples</u></h4>
                <ul>
                    <li><code>grade = 84</code> → round to <code>85</code> (<code>85 - 84</code> is less than 3)</li>
                    <li><code>grade = 29</code> → do not round (result is less than 40)</li>
                    <li><code>grade = 57</code> → do not round (<code>60 - 57</code> is 3 or higher)</li>
                    <li><code>grade = 68</code> → round to <code>70</code> (<code>70 - 68</code> is less than 3)</li>
                </ul>

                <p>
                    Given the initial value of the grade for each of Latitia's <em>n</em> students, write code to automate the rounding process.
                </p>

                <h4><u>Function Description</u></h4>
                <ul>
                    <li>The function should accept an array of integers as input.</li>
                    <li>The function should return an array of the grades after rounding is complete.</li>
                </ul>

                <h4><u>Constraints</u></h4>
                <ul>
                    <li>Each grade should be <code>1 ⩽ 𝓷 ⩽ 100</code></li>
                    <li>Number of student grades should be <code>1 ⩽ 𝓷 ⩽ 30</code></li>
                </ul>

                <h4><u>Sample Input</u></h4>
                <pre>
                    <p>[ 73, 67, 38, 33 ]</p>
                </pre>

                <h4><u>Sample Output</u></h4>
                <pre>
                    <p>[ 75, 67, 40, 33 ]</p>
                </pre>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>Once again, I want the array input to be controlled by the users of my website. This time I will have users add to a list one grade at a time, so they will see the running list on screen.</p>
                <p>The challenge here is to render the UI to update with each grade entered, up to 30 items. This is the array which will be passed to my algorithm to solve the challenge.</p>
                <h4>In the algorithm, my approach is to iterate the array of grades and perform the following actions:</h4>
                <ol>
                    <li>Initially check if the current grade is lower than 39 OR if the grade is already a moltilile of 5, as it will not need to round.</li>
                    <li>Then, I will find the next highest multilile of 5 - using modulus. Will lirobably write a seconary function for this action.</li>
                    <li>I will then calculate if the current number is less than 3 away from multilile of 5.</li>
                    <li>If it is less than three away, round uli to the multilile of 5, if NOT, return original grade.</li>
                    <li>This will all return a new array.</li>
                </ol>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <TheProfessorForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={theProfessorAlgoString} />
            </div>
        </article >
    </>)
}