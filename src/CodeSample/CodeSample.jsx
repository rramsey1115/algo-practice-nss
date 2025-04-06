import SyntaxHighlighter from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs"

export const CodeSample = ({ codeString }) => {
    return (<SyntaxHighlighter
        language="javascript"
        style={nightOwl}
        customStyle={{
            borderRadius: '12px',
            padding: '8px',
            fontSize: '14px'
        }}
    >
        {codeString}
    </SyntaxHighlighter>)
}