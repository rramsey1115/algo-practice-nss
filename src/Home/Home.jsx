export const Home = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Home</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Intro</h2>
                <p>I was looking for interesting ways to practice fundamental algorithm practice. To stay sharp for interview and to simply gain skills.
                    When looking to see if there were any updates to the NSS curriculum (yes I already graduated but still check in as they provide amazing resources/review/projects), I noticed they had added some algorithmic practice challenges!</p>
                <p>I decided instead of simply solving the algorithms, as I could on any website like HackerRank or LeetCode, I would make a simple front-end react app, for a few reasons:</p>
                <ul>
                    <li>Practice building a front-end app - React, react-router-dom, building with Vite, organizing file structure, etc.</li>
                    <li>Practice styling with MaterialUI, specifically exploring some new (to me) components like NavTabs</li>
                    <li>Practice algorithmic problem solving</li>
                    <li>Provide not only coding solutions, but useful commentary into my thought process</li>
                    <li>Have fun with code!</li>
                </ul>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Getting Around</h2>
                <p>The landing page provides brief introduction to this project, mirroring many of the things in this file.</p>
                <p>All other tabs contain a "view" which is a brief explanation of the problem, my approach to the problem solving, as well as the solution.</p>
                <p>Some views may accept user input, or display result of algorithms based on clicking buttons etc. Depending upon the challenge.</p>
                <p>I tried to be creative with the given challenges, display something interactive for the user, and also provide insight into my problem solving process.</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Tech Used</h2>
                <table style={{ margin: "30px auto 10px auto" }}>
                    <tbody>
                        <tr>
                            <td><img width="55" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" title="React" /></td>
                            <td><img width="55" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png" alt="Vite" title="Vite" /></td>
                            <td><img width="55" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" title="JavaScript" /></td>
                            <td><img width="55" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/material_ui.png" alt="Material UI" title="Material UI" /></td>
                            <td><img width="55" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Git" title="Git" /></td>
                            <td><img width="55" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png" alt="GitHub" title="GitHub" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </>)
}