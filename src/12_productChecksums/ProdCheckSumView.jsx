import { ProdCheckSumForm } from "./ProdCheckSumForm.jsx";
import { CodeSample } from "../CodeSample/CodeSample.jsx";
import { prodCheckSumAlgoString } from "./prodCheckSumAlgo.js";

export const ProdCheckSumView = () => {
    return (<>
        <header className="header">
            <h1 className="header-heading">Products Check Sum</h1>
        </header>
        <article className="article">
            <div className="article-div">
                <h2 className="article-heading">Challenge</h2>
                <p>
                    Late at night, you sneak into the warehouse and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates.
                </p>
                <p>
                    To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.
                </p>
                <p>For example, if you see the following box IDs:</p>
                <ul>
                    <li><code>abcdef</code> contains no letters that appear exactly two or three times.</li>
                    <li><code>bababc</code> contains two a and three b, so it counts for both.</li>
                    <li><code>abbcde</code> contains two b, but no letter appears exactly three times.</li>
                    <li><code>abcccd</code> contains three c, but no letter appears exactly two times.</li>
                    <li><code>aabcdd</code> contains two a and two d, but it only counts once.</li>
                    <li><code>abcdee</code> contains two e.</li>
                    <li><code>ababab</code> contains three a and three b, but it only counts once.</li>
                </ul>
                <p>
                    Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.
                </p>
                <p><strong>What is the checksum for your list of box IDs?</strong></p>

                <details>
                    <summary>Product ID's</summary>
                    {`const productIds = ["ubkfmdjxyzlbgkrotcepvswaqx", "uikfmdkuyzlbgerotcepvswaqh", "uikfmdpxyzlbgnrotcepvswoeh", "ikfmdjxyzlbgnrotqepvswyqh", "qgkfmdjxyzlbgnmotcepvswaqh", "uikfmdjxyzqbgnrytcepvsbaqh", "uikfmdjxyzibgprotcecvswaqh", "uikfmajxyzlcgnrojcepvswaqh", "uvkfsdjxyzlbgnrotcepvjwaqh", "uikfmdjxfzlbggrotcepvswawh", "uikfmhjxyzlbgnuotcepvjwaqh", "uikfmdjxyzlbuzcotcepvswaqh", "uikfmdwxyzlbgnrotcepvfwamh", "uikfmdexyzlbgnroecepvswhqh", "uikfmdjuyzlbgnrotcqpvswafh", "uikfddjxyzvbgnrotceppswaqh", "yikfwdjxyzlbgnrotcepvswagh", "uiktmdjxyzlbgnrotceposwajh", "uikfmdsxyzlbgnroteetvswaqh", "uikfpdjxyzlbgnroncepvswuqh", "uikfmtjxyzlbgurotcepvswaoh", "eikfmdjxyjlbgnrotcepyswaqh", "uikfkdjxyzlbgnrotcepvszaqv", "uikfrdjxtwlbgnrotcepvswaqh", "uikfmdjxyzlbgnrotpepwswahh", "kikfmdjxyzlbgnkotcepvswqqh", "uikfkduxyzlbgnrotcepvswafh", "uikfxhjxyzlbgnrotcegvswaqh", "uikfmdjxyzlmgnrotcenvawaqh", "uzkfmddxyzlbgnrltcepvswaqh",
"uikfmdjxyzlbgnrobcepisqaqh", "uijfmdjxyzlbgnrotcexvrwaqh", "uiwjmdjxyzlbgnrotceprswaqh", "uhkqmdjxwzlbgnrotcepvswaqh", "uiktmsjxyzwbgnrotcepvswaqh", "uikfmdjxyztbgnqotcepvswcqh", "uibfmdjxyzlbgnroqcepvswaqx", "uwkfmdjxyxlbgnrotcfpvswaqh", "uikumdjxyzlbgnrstceposwaqh", "uikfzdjxyznhgnrotcepvswaqh", "uikuydjxyzlbgnrotqepvswaqh", "uikfmdqxyzlbgnrotfefvswaqh", "yikfmdjxyzlbrnrqtcepvswaqh", "uiifmdjxyzlbenrotcfpvswaqh", "uxkjmdjxyzlbgnrotcmpvswaqh", "uikgmdjxyzlbgnrotceovlwaqh", "uikfmdjxyzvbgzrotcenvswaqh", "uiufmdjxyzlbgnrotceposwazh", "uiafmdjxyzlignmotcepvswaqh", "uikfmdjxyzwbgnsotlepvswaqh", "uikjmdjvyzlbgnrotcenvswaqh", "uikfmdjxyzlbonroteepvswaqi", "uikfmdjxyzldgnroxcepviwaqh", "uikvmdjxyzlbgdrotrepvswaqh", "uikfmdjyyzwbgnrotcepvzwaqh", "uikfmdjxyzzbnnvotcepvswaqh", "uikomdjxyzlbgnrotcepvuwhqh", "uikfmmjxyzbbgnrotcepvswayh", "uikfmdjfezlbgprotcepvswaqh", "uzkfmojxmzlbgnrotcepvswaqh",
"uipfmdjxyzlbgnrotceyuswaqh", "uikfmdjxyzlkgnmotcepvswadh", "uikfmdjxyzlbgnuctcbpvswaqh", "uikfqdjxyzlbogrotcepvswaqh", "uikfmdjxyzlfynrotcepvswash", "uikfmdjxizzmgnrotcepvswaqh", "uhkfmdjxyzlbhnrotcenvswaqh", "uipfmdjxyzlbgorotcepfswaqh", "uikfmdjxyznbgnrotcepvswfah", "uikfmujxyzlbgnrotnepvssaqh", "uikfmdjxyzlxgnrotcepvsrwqh", "uikfmdjxszlbgnrottvpvswaqh", "umkfmdskyzlbgnrotcepvswaqh", "uikfmdjxyzlbgorotcwpzswaqh", "uikfmdhxyzzbgnzotcepvswaqh", "jikfmdjxyzlbgnrotcepveyaqh", "uirfmdlxyzlbgnjotcepvswaqh", "uikfmdjxyzlbgnrorxepvswazh", "uikfmdjxyzltgnrotcepvsxaqi", "uikfmdjxyzlbxlrotcepkswaqh", "uvkfmdjxyzlbgnrotcopvswxqh", "uxkfmdjxkzlbgnrotcepvswqqh", "uikfmdjxyzlbqnrotcepvhwrqh", "uikfmdjxyzlvgnrolcepvswrqh", "urkfmdixyzlbgnrotcepvsjaqh", "uikfmdjxymlbsnrotcepvswcqh", "uikfmdjxyilbgnrotcepvcwzqh", "uikfadjxlzlbgnrotcepvswaql", "uikfmdjxuzlbgdrotcgpvswaqh", "yikfmdgxyzlbgnrotcepvswarh",
"uikfmdjxyzlbgorotcepcswaqv", "uikkmdjxyzlbvnrotcepvvwaqh", "uwzfmdjxyxlbgnrotcfpvswaqh", "uikfmdjxyztbgnrotcrtvswaqh", "uiufmdjxyzhbgnrotcupvswaqh", "uikfzdjcyzlbgnrotcfpvswaqh", "uipfmdjxyzlbgnrotavpvswaqh", "uikfmajxyzlbgnrotcepbsxaqh", "uikfmdjfyzlbgnrotbepvswmqh", "gikkmdjxyzlbgnrptcepvswaqh", "uikfmdjxqvlbgnrotsepvswaqh", "fikfmdjxyzlbgnrotcegvswoqh", "idkfmdjxyzlbgnrotcepwswaqh", "uikfmdqxyzlbmnrobcepvswaqh", "uikfmdjxyzpbgnroicepvsyaqh", "uikfmkoxyzlbgnrotcgpvswaqh", "unkfmdjxyzlbpnrolcepvswaqh", "uikfmdjmyzlbgfrotcupvswaqh", "ujkfmdjxynlbgnroteepvswaqh", "uikfmljxyzlbgnaotcepvsiaqh", "uikfmdjdyzlbgnrotcepvtwaqd", "uikfmdjxyzlbgnyotcepimwaqh", "uikfmdjxyzfbjnrotcepvxwaqh", "eiwfmdjxyzlbgnrdtcepvswaqh", "umkhmdjxyzlbgnrotceivswaqh", "uikfmdjxyzlbgnrotcwpvswneh", "uckfmdjxyzlbknrotcepvswauh", "uiofmdjoyzlbgnrbtcepvswaqh", "uikfmdbxyzlbgnrotcepaslaqh", "uimfmdjxyalbgnrotcepvswaxh",
"uqkfmdjxyzlbwnrotcepmswaqh", "uiyfmdjxyzlbgnrotcepvswxuh", "uikfmdjxyzlbgmrotgepvswamh", "uikfmdjxyqlbgarozcepvswaqh", "uikfmdjxyzabanpotcepvswaqh", "uikfmdjgyzlbsnrotcepvswaqj", "uikfmdjxyzlbwnrottepvsvaqh", "uikfmdjxyzlbbnrotcepvofaqh", "uikfudjxyzlbgnustcepvswaqh", "cskfmqjxyzlbgnrotcepvswaqh", "uiwfmddxyzlbgnrotccpvswaqh", "eikpmdjxyzlbgnrotcesvswaqh", "uikfmdzxyzlngnrrtcepvswaqh", "uikfmdjxyzlbgnrotcepaswtph", "uirfmdjxyzlbgnrotcepvswsqe", "uikjmdjxqzlbgirotcepvswaqh", "uikfmdjxsllbknrotcepvswaqh", "uikfmdjxyqlbgcrotcepvswaqu", "uikfmdjsymlbgnrotcebvswaqh", "uikfmdjxezlbgnroccepviwaqh", "uikfmdjiyzjbgnrotcepvswarh", "uqkfmdjxyzmbgnrotcepvslaqh", "unkfmdjxyzlbinrotceplswaqh", "uikfmdjxyzpbgnrjtcedvswaqh", "uicfmdjxyzlbgrrotcepvswamh", "ukknmdjxyzlbgnqotcepvswaqh", "uikfudjxyzlbdnrztcepvswaqh", "uikfmdjxyzlbgnrozcepvswawk", "uikfmduxyzsbgnrotcepvswauh", "uikfmdjxyzljbnrotcenvswaqh",
"uukfmdjxyzlbgnrotcckvswaqh", "uilfldjxyzlbgnrotcdpvswaqh", "uckfmdjxyvybgnrotcepvswaqh", "qikfmdjxyglbgnrotcepvrwaqh", "uikfmhjxyzltgnrotcepvswbqh", "uikfmdjxipabgnrotcepvswaqh", "uikfmdjxyzlbgnrotceovswanl", "uikfmdjxyzlbgirotcapvswahh", "uikfucjxyflbgnrotcepvswaqh", "pikfmdjxyzpbgnrotcepvswaeh", "uikfmdjiyylbgnrotcervswaqh", "uikfmdjgyzlbgnrotcaevswaqh", "uikvmdjxyzlbunrotcepvswarh", "uikfadjuyzpbgnrotcepvswaqh", "uikfmdjxyzlbgnrotcepsawaqj", "eikfmdjxyflbgnrotcepvswaeh", "uisfmdaxyzlbgnrotcepvswlqh", "vikfmdjxyzlzgnrotcepvswanh", "ukkfmdoxyzlbgnrotcewvswaqh", "uikfmdhxyzlbgnrotcrpvbwaqh", "uhkfmdjwezlbgnrotcepvswaqh", "uikfddjxyzlbgnroteepvpwaqh", "uikfmdjxczlbgncotiepvswaqh", "uikfvdjxyzlbgnrotcnpvsaaqh", "uikfmdjxyzlbgnritcepvlwmqh", "uikfmdjxczlcgnrotcecvswaqh", "mikfmdjxyzlbgnrotcepvswasi", "uifvmdjxyzlbgnrotpepvswaqh", "uikzmdjxyzlbgnrotrepvswaqs", "uikfmqjqyzlbunrotcepvswaqh",
"uikfpdyxyzlbgnrotcepvswagh", "uikfmdjxyzobgnrotrlpvswaqh", "zisdmdjxyzlbgnrotcepvswaqh", "uikfmdjxyzlbgnlotiesvswaqh", "uikfddixyzlbgnroucepvswaqh", "uijfmdrxyzlbgnrotoepvswaqh", "uikfmdcxbzlbgnrotcepvpwaqh", "uikfmdjxxzlbfnrotcecvswaqh", "upkfmdjxyzmtgnrotcepvswaqh", "uikfmdrxyzlbgnrjtcepvswaqp", "uizfmdjxyzlbsnrotcepviwaqh", "uidfmdjxyslbgnrotcxpvswaqh", "uikfmdjxyzlbgnrovyepvsdaqh", "uiafmdjxyzlbgnrxtcepvsdaqh", "ugkfmdjxyzlbgnrodcepvswawh", "pikfmtjxyzhbgnrotcepvswaqh", "uikfmdjxyzlfgnvotcepvswtqh", "uikbmdjxyzlbgerotcepvswaqm", "uikfmdjxyhlbdnrotcepvswaqy", "uikfgdjxyzlbgnhotcepvswdqh", "uikfmdpxyzlbgnrotcepvscanh", "uikfmdjxyzsbgnretcepvswaqn", "uikfddjxyzlrgnrotcepvsbaqh", "uikfmdjxyzlbgnrotcqnrswaqh", "uhkfmejxyzlbgnrotvepvswaqh", "uikimdjxyzlngnrotceprswaqh", "uikfmdjxyzwbunrotiepvswaqh", "rikfmdjxyzlbgnrotcypvssaqh", "uikfmdjxyzlbdnrotcrpvswsqh", "uekfmdjxkzlbznrotcepvswaqh",
"uikfmdjxyglbgvrotcepvswaqv", "uikfmcjxyzlbgnrotmeovswaqh", "uikfmdjxyznbgnrozcepvswaqm", "uikfmdjxyzlbdnrotcepdsyaqh", "umkfmdjxfzlbgnrotiepvswaqh", "uitfmdjxyzvbcnrotcepvswaqh", "uikfmdjqyzlbgnrvtcepvlwaqh", "uikfmdjxyzkbworotcepvswaqh", "uikfmdzxyzlbwnrotcypvswaqh", "uikfmdjxyklbgnrftyepvswaqh", "uinfmsjxyzlbgnrotcepsswaqh", "xisfmdjxymlbgnrotcepvswaqh", "uikfmdjxjzlbgnropcepvswaqv", "uikfmdjxyalegyrotcepvswaqh", "uikfydjxyzlbgnrotcekvswtqh", "uikwmojxyzlbgnromcepvswaqh", "uikdmdjayzlbgnrotcepvswzqh", "uikfmdjxyzlmvnrotctpvswaqh", "uikfmbjxyzlbgnrotceptsweqh", "yvkfmdjxyzlbgqrotcepvswaqh", "uikomdjxfxlbgnrotcepvswaqh", "uikfmdjxczlbgnroocepgswaqh", "uikemdjxizlbgnrotcegvswaqh", "uikdmdjxyzlbgwrotceprswaqh", "tiyfmdjfyzlbgnrotcepvswaqh", "tmkfmdjxyzlbgirotcepvswaqh", "uikfmdjxyzebgnzotcepqswaqh", "uikfmljxyzlbgnrwtcepvswaeh", "uikfmojxyzlbgnrotcepbswwqh", "uikfmdjxyzlbgsrotcewvswwqh",
"uikfmdjhyzlbgdrogcepvswaqh", "uikfmvjxyzlbrnrltcepvswaqh", "jikfmdjxyzlbgnrotcepvgcaqh", "uikhtdjxyzlbgnrotcepvswarh", "uikfmdjxyezbgnritcepvswaqh", "uikfwdjxyzlbgnrotzepvsnaqh", "uikfmdjxqylbgnrobcepvswaqh", "zikzmdjxyzlbgnrhtcepvswaqh", "uiksmzjxyzlbgnrftcepvswaqh", "uikfmdjxuzlbgnrotcepvsvaqc"]}`}
                </details>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Approach</h2>
                <p>The current challenge provided a large dataset to analyze, so the user does not have ability to enter their won info for this challenge. I felt there was enough in the algorithm to not over-complicate things. I have several examples of forms handling user inputs in earlier challenges!</p>
                <p>The steps I took to solving this problem:</p>
                <ul>
                    <li>Check that data is valid</li>
                    <li>Create a 'store' object to store two numbers needed to multiply at the end to find product.</li>
                    <li>Iterate array of prodId's and perform a check function on each entry.</li>
                    <li>Check function finds out if current Id contains letters repeated exactly 2 times AND exactly 3 times. This process used an object, storing keys of letters used and values or how many times this letter repeats. Then if any letter repeats exactly 2 times, add 1 to my store for 2's. If any letter repeats exactly 3 times, add 1 to my store for 3's.</li>
                    <li>After check has compiled 2's and 3's for all items in array, multiply the value of 2's and 3's within the store object to get the final product.</li>
                </ul>
                <p>The primary challenge here was in using objects to store key/value pairs to track duplicate letters within in id.</p>
            </div>
            <div className="article-div">
                <h2 className="article-heading">Try It Out</h2>
                <ProdCheckSumForm />
            </div>
            <div className="article-div">
                <h2 className="article-heading">Solution</h2>
                <CodeSample codeString={prodCheckSumAlgoString} />
            </div>
        </article>
    </>)
}