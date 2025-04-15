import { CodeSample } from "../CodeSample/CodeSample.jsx";
import { dragonFlightAlgoString } from "./dragonFlightAlgo.js";
import { DragonFlightForm } from "./DragonFlightForm.jsx";

export const DragonFlightView = () => {


    return (<>
        <header className="header">
            <h1 className="header-heading">Dragon Flight Planner</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <h3>Story:</h3>
                <p>
                    You’re the royal sky mapper for a kingdom of dragons. Each dragon gives you its
                    planned flight distance in miles. The Dragon Council needs to know which two
                    dragons are planning trips that sum to exactly the same as the king’s dragon’s
                    route, so they can avoid airspace collisions.
                </p>

                <h3>Challenge:</h3>
                <ul>
                    <li>An array of flight distances (positive integers).</li>
                    <li>A target distance (the king’s route).</li>
                    <li>
                        Return the <strong>first pair</strong> of distances that add up to the target.
                        If none, return <code>"No collisions"</code>.
                    </li>
                </ul>

                <h3>Example:</h3>
                <pre>
                    <code>
                        dragonFlights([120, 340, 560, 230, 550], 670)<br />
      // ➝ [120, 550]
                    </code>
                </pre>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>
                    To help the Dragon Council avoid mid-air collisions, I wrote a function that checks every possible pair of dragon flight distances.
                    If any two add up to match the King’s flight distance, we’ve got a potential crash! I return the first pair I find and sound the alarm. 🐉💥
                </p>
                <p>
                    For quick testing, I included a <strong>base case</strong> with preset values (five dragons and a known target). But users can also
                    enter their own <strong>custom flight distances</strong> and the King’s route to test out their own scenarios.
                    The form dynamically displays results as soon as enough valid data is entered—either a matching pair or a reassuring message:
                    <em>“No Collisions! Fly King, Fly!”</em>
                </p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <DragonFlightForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Algorithmic Solution</h2>
                <CodeSample codeString={dragonFlightAlgoString} />
            </div>
        </article>
    </>

    )
}