import { freqFrenzyAlgoString } from "./freqFrenzyAlgo"
import { FreqFrenzyForm } from "./FreqFrenzyForm"
import { CodeSample } from "../CodeSample/CodeSample.jsx"

export const FreqFrenzyView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Frequency Frenzy</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>
                    As an intrepid archaeologist, you and your team communicate with custom built devices that broadcast on a rotating frequency that all devices synchronize with. Unfortunately, today you look at the device's tiny screen. <strong>"Error: Device must be calibrated before first use. Frequency drift detected. Cannot maintain destination lock."</strong>
                </p>
                <p>
                    Below the message, the device shows a sequence of changes in frequency made to this point in the day. A value like +6 means the current frequency increases by 6; a value like -3 means the current frequency decreases by 3.
                </p>
                <p>
                    For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:
                </p>
                <ul>
                    <li>Current frequency 0, change of +1; resulting frequency 1.</li>
                    <li>Current frequency 1, change of -2; resulting frequency -1.</li>
                    <li>Current frequency -1, change of +3; resulting frequency 2.</li>
                    <li>Current frequency 2, change of +1; resulting frequency 3.</li>
                </ul>
                <p>In this example, the resulting frequency is 3.</p>
                <p>Here are other example situations:</p>
                <ul>
                    <li>+1, +1, +1 results in 3</li>
                    <li>+1, +1, -2 results in 0</li>
                    <li>-1, -2, -3 results in -6</li>
                </ul>
                <p>
                    Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?
                </p>
                <pre>
                    <code>{`const frequencyChanges = [ 12, -10, -4, -8, 18, -1, -13,
  10, -13, 5, 7, 6, 14, -9, -8, 7, 18, -11, 13, -1, 20, 11,
  13, -2, 3, -8, -16, 4, -6, -3, -9, -12, 16, 17, -5, -11,
  2, -20, -15, 5, 3, 11, -13, -18, -13, -6, -19, 6, -15,
  ...
  -13, -1, -15, -9,
  -6, 20, 17, 1, -3, 44, 17, 17, 21, 9, 20, -17, 11, 10,
  -15, 10, 3, 4, 16, 8, -7, 17, 8, 15, -9, 4, 28, 8, -1, -6,
  -10, -65, 4, -42, -14, -14, -24, -15, 6, 13, -72, -1, -17,
  ...
  20, -7, -3, 77, 1, 42, 18, 9, -1, 23, 57, 8,
  -12, 1, 5, 12, 3, 10, -1, 14, 20, -7, -3, -14, -12, 9, 16,
  16, 12, 14, 11, 11, 2, 1, 19, -10, 18, -17, -9, -11, -8,
  10, -1, -110292 ];`}</code>
                </pre>
                <details>
                    <summary>Helpful Hint: Final Frequency</summary>
                    <p>408</p>
                </details>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>This one is very simple, so I followed the KISS method!</p>
                <p>Create a running sum variable, loop through each number in the given array, add or subtract to running sum based on value in array, return result at the end.</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <FreqFrenzyForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={freqFrenzyAlgoString} />
            </div>
        </article>
    </>)
}