import { arcadeEliteAlgoString } from "./arcadeEliteAlgo.js";
import { ArcadeEliteForm } from "./ArcadeEliteForm.jsx";
import { CodeSample } from "../CodeSample/CodeSample.jsx";

export const ArcadeEliteView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Arcade Elite</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>
                    An arcade game player wants to climb to the top of the leaderboard and track their ranking.
                    The game uses <strong>Dense Ranking</strong>, so its leaderboard works like this:
                </p>
                <ul>
                    <li>The player with the highest score is ranked number 1 on the leaderboard.</li>
                    <li>
                        Players who have equal scores receive the same ranking number, and the next player(s)
                        receive the immediately following ranking number.
                    </li>
                </ul>

                <h4><u>Example</u></h4>
                <pre>
                    <code>
                        {`topFiveScores = [ 500, 450, 450, 300, 290, 270 ]
currentPlayerGameScores = [ 280, 400, 500 ]`}
                    </code>
                </pre>
                <p>
                    The ranked players will have ranks 1, 2, 2, 3, 4 and 5, respectively. If the player's
                    scores are 290, 400 and 500, their rankings after each game played would be 4, 3 and 1.
                </p>
                <p>Return the current player's ranking.</p>

                <h4><u>Function Description</u></h4>
                <p>Your function should accept two inputs:</p>
                <ul>
                    <li>An array of leaderboard scores as whole numbers</li>
                    <li>An array of scores for the current player as whole numbers</li>
                </ul>
                <p>
                    Your function should return an array of whole numbers, with each number representing the
                    player's rank after each score.
                </p>

                <h4><u>Constraints</u></h4>
                <ul>
                    <li>The leaderboard array should contain only the top 5 scores.</li>
                    <li>Leaderboard scores must be in the range: 10 ⩽ 𝓷 ⩽ 500</li>
                    <li>The player's scores array can contain any number of entries.</li>
                    <li>Player's scores must be in the range: 10 ⩽ 𝓷 ⩽ 500</li>
                    <li>
                        If a player's score is not in the range of scores for the leaderboard, it should not be
                        added to the returned array.
                    </li>
                    <li>The leaderboard array must be in descending order.</li>
                    <li>The player's scores array must be in ascending order.</li>
                </ul>

                <h4><u>Example Input</u></h4>
                <pre>
                    <code>
                        {`[ 490, 450, 400, 320, 320, 290 ]
[ 50, 310, 480, 200, 350, 180 ]`}
                    </code>
                </pre>

                <h4>Return Value</h4>
                <pre>
                    <code>{`[ 5, 2, 4 ]`}</code>
                </pre>

                <h4>Explanation of Results</h4>
                <ul>
                    <li>50 was not in the range of leaderboard scores, so no rank was added.</li>
                    <li>310 would be the 5th ranked score, so a rank was added.</li>
                    <li>480 would be the 2nd ranked score, so a rank was added.</li>
                    <li>200 was not in the range, so no rank was added.</li>
                    <li>350 would be the 4th ranked score, so a rank was added.</li>
                    <li>180 was not in the range, so no rank was added.</li>
                </ul>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <ArcadeEliteForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={arcadeEliteAlgoString} />
            </div>
        </article>
    </>)
}