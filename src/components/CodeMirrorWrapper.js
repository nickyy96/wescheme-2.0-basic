import CodeMirror from '@uiw/react-codemirror';
import Test from "../pages/test"
import { useState } from 'react';

const CodeMirrorWrapper = () => {
    const [code, setCode] = useState("");

    const onChange = (value) => {
        setCode(value)
        console.log(value)
    }

    return (
        <div>
            <Test code={code}></Test>

            <CodeMirror
                 value=""
                 height="200px"
                 onChange={onChange}
            />
            <CodeMirror
                 value="console.log('hello world!');"
                 height="200px"
                //  onChange={onChange}
            />
        </div>
    )
}

export default CodeMirrorWrapper