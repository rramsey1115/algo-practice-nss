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