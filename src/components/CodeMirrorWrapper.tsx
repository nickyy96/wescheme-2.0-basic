import CodeMirror from '@uiw/react-codemirror';
// import Test from "../pages/test"
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import runCode, {initializeConstants, newRunCode} from './racketHandler';
import type SchemeError from '../utils/types';

const CodeMirrorWrapper = () => {
    const [value, setValue] = useState<string>("");
    const [replCode, setReplCode] = useState<string>("")
    const replID = 'repl'
    const defID = 'definitions'

    function onChange(value: string) {
        console.log(value)
        setValue(value)
    }

    function onReplChange(value: string) {
        console.log(value)
        setReplCode(value)
    }

    /**
     * Highlights characters and displays error message
     * @param error Non-null error object from the runtime
     * @param id ID of code mirror container
     */
    function handleError(error: SchemeError, id: string) {
        const cmNode = document.querySelector('#' + id)
        console.log(cmNode)
        if (cmNode === null) return
        const exampleElements = cmNode.querySelectorAll('.cm-line');

        const startIndex = 4;
        const endIndex = 7;

        console.log(exampleElements[0]?.innerHTML)
        if (exampleElements[0]) {
            const highlightedStr = exampleElements[0].innerHTML.substring(0, startIndex) + '<span className="text-red-500">' + exampleElements[0].innerHTML.substring(startIndex, endIndex + 1) + '</span>' + exampleElements[0].innerHTML.substring(endIndex + 1)
            exampleElements[0].innerHTML = highlightedStr
        }


        console.log(exampleElements[0]?.innerHTML)
        console.log(error.val._fields[0].args[0].location.elts[1])
    }

    /**
     * Executes code in definitions window and creates a new runtime object
     */
    function runButtonHandler() {
        let error: SchemeError | null = null
        if ((error = newRunCode(value) as SchemeError) !== null) {
            handleError(error, defID)
        }
    }

    /**
     * Executes code in REPL window in existing runtime
     */
    function replButtonHandler() {
        let error: SchemeError | null = null
        if ((error = runCode(replCode) as SchemeError) !== null) {
            handleError(error, replID)
        }
    }

    useEffect(() => {
        // initializes constants on mount
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        initializeConstants()
    }, [])

    return (
        <div>
            <div id="interactions">
                interactions menu!
            </div>
            <CodeMirror
                value={value}
                height="200px"
                onChange={onChange}
                id={defID}
            />
            <Button variant="contained" onClick={runButtonHandler} style={{ backgroundColor: '#2196f3' }}>Run Button!</Button>
            <CodeMirror
                value={replCode}
                height="200px"
                onChange={onReplChange}
                id={replID}
            />
            <p>hi<span className='text-red-500'>ello</span></p>
            <Button variant="contained" onClick={replButtonHandler} style={{ backgroundColor: '#2196f3' }}>Repl Button!</Button>
        </div>
    )
}

export default CodeMirrorWrapper