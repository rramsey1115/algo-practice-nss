export const ProdCheckSumView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Products Check Sum</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>This exercise uses the same data as the previous one.</p>
                <p>
                    You notice that the communication device repeats the same frequency change
                    list over and over. To calibrate the device, you need to find the first
                    frequency it reaches twice.
                </p>
                <p>
                    For example, using the same list of changes above, the device would loop as
                    follows:
                </p>
                <ul>
                    <li>Current frequency 0, change of +1; resulting frequency 1.</li>
                    <li>Current frequency 1, change of -2; resulting frequency -1.</li>
                    <li>Current frequency -1, change of +3; resulting frequency 2.</li>
                    <li>Current frequency 2, change of +1; resulting frequency 3.</li>
                    <li>(At this point, the device continues from the start of the list.)</li>
                    <li>Current frequency 3, change of +1; resulting frequency 4.</li>
                    <li>
                        Current frequency 4, change of -2; resulting frequency 2, which has
                        already been seen.
                    </li>
                </ul>
                <p>
                    In this example, the first frequency reached twice is <strong>2</strong>.
                    Note that your device might need to repeat its list of frequency changes
                    many times before a duplicate frequency is found, and that duplicates might
                    be found while in the middle of processing the list.
                </p>
                <h4><u>Helpful Hint</u></h4>
                <p>
                    Don't look at the hint unless you're stuck, or you feel you have a
                    successful algorithm.
                </p>
                <details>
                    <summary>Duplicate frequency</summary>
                    <p>55250</p>
                </details>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
            </div>
        </article>
    </>)
}