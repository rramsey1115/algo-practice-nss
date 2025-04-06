import { TallBuildingsForm } from "./TallBuildingsForm"
import { CodeSample } from "../CodeSample/CodeSample.jsx"
import { tallBuildingsAlgoString } from "./tallBuildingsAlgo.js"

export const TallBuildingsView = () => {

    return (<>
        <header className="header">
            <h1 className="header-heading">Tall Buildings</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>
                    You are in charge of the city planning for your town. When new companies come to town,
                    they often want to make a statement, but the city has a height requirement on any new building.
                    Your job is to count how many buildings currently are the highest.
                </p>
                <h4><u>Example</u></h4>
                <p>const buildings = [ 1250, 800, 600, 1250, 750 ]</p>
                <p>
                    The current maximum height buildings are <strong>1250</strong> meters high.
                    There are <strong>2</strong> of them, so return <strong>2</strong> from the function.
                </p>
                <h4><u>Function Description</u></h4>
                <p>The function should accept an array of numbers as input.</p>
                <h4><u>Returns</u></h4>
                <p>The number of buildings that are tallest.</p>
                <h4><u>Sample Input</u></h4>
                <p>[ 1150, 3023, 2020, 3023, 3023 ]</p>
                <h4><u>Sample Output</u></h4>
                <p>3</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>My idea to make this more interactive where users can select between 2 and 6 buildings to compare heights.</p>
                <p>The form below uses conditional rendering to walk users through selecting how many buildings, which then reveals sliders to select building height values (MUI sliders were new to me so a nice learning bonus).</p>
                <p>Algorithmically very simple, again, most of the issues came from the React component code.</p>
                <p>My solution uses <em>.reduce</em> first, to find the max number contained in the array. Then based opon that max value, I used <em>.filter</em> and <em>.length</em> to find how many had that matching value.</p>
                <p>Returning and object with maxHeight and numOfMax allows me to access thsoe properties and display both pieces of data to the user.</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <TallBuildingsForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={tallBuildingsAlgoString} />
            </div>
        </article>
    </>)
}